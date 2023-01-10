// Remove duplicates from a linked list
// solution 1

function removeDuplicatesFromLinkedList(linkedList) {
  // edge case if LL dosen't exist
  if (!linkedList) return null;
  let current = linkedList.next;
  let prev = linkedList;

  while (prev) {
    if (current === null) return linkedList;
    if (prev.value === current.value) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return prev;
}
