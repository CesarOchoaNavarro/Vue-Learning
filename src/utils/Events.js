// Creating Map() that will keep track of all of our events
const events = new Map();

// Then we will export an object that will have methods that will allow us to set up event as well as emit them
export default {
  $on(eventName, fn){
    // Check to see if we dont have an event with the given name
    if (!events.has(eventName)) {
      // If we dont then we will create one
      events.set(eventName, [])
    }

    events.get(eventName).push(fn)
  },

  $off(eventName, fn) {
    throw { message: 'Not implemented' }
  },

  $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach(fn => fn(data))
    }
  }
}