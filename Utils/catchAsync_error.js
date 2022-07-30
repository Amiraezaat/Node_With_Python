
module.exports = func => {
    return (req, res, next) => {
      func(req, res, next).catch(next);
    };
  };

// catching errors in Async function
  