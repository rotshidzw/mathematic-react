import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(objects, btnName) {
  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(btnName)) {
    if (btnName === '0' && objects.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (objects.operation) {
      if (objects.next && objects.next !== '0') {
        return { ...objects, next: objects.next + btnName };
      }
      return { ...objects, next: btnName };
    }
    // If there is no operation, update next and clear the value
    if (objects.next && objects.next !== '0') {
      return {
        next: objects.next + btnName,
        total: null,
      };
    }
    return {
      next: btnName,
      total: null,
    };
  }

  if (btnName === '.') {
    if (objects.next) {
      if (objects.next.includes('.')) {
        return { ...objects };
      }
      return { ...objects, next: `${objects.next}.` };
    }
    if (objects.operation) {
      return { ...objects, next: '0.' };
    }
    if (objects.total) {
      if (objects.total.includes('.')) {
        return {};
      }
      return { ...objects, next: `${objects.total}.` };
    }
    return { ...objects, next: '0.' };
  }

  if (btnName === '=') {
    if (objects.next && objects.operation) {
      return {
        total: operate(objects.total, objects.next, objects.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (btnName === '+/-') {
    if (objects.next) {
      return { ...objects, next: (-1 * parseFloat(objects.next)).toString() };
    }
    if (objects.total) {
      return { ...objects, total: (-1 * parseFloat(objects.total)).toString() };
    }
    return {};
  }

  if (!objects.next && objects.total && !objects.operation) {
    return { ...objects, operation: btnName };
  }

  // User pressed an operation button and there is an existing operation
  if (objects.operation) {
    if (objects.total && !objects.next) {
      return { ...objects, operation: btnName };
    }

    if (!objects.total) {
      return { total: 0, operation: btnName };
    }

    return {
      total: operate(objects.total, objects.next, objects.operation),
      next: null,
      operation: btnName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!objects.next) {
    return { operation: btnName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: objects.next,
    next: null,
    operation: btnName,
  };
}
