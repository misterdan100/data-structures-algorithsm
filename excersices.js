/* Coding exercise
Ticket Discount Maximizer: A theme park offers a promotion: for every group of
k tickets purchased together, the cheapest ticket in that group is free. Given a
list of n ticket prices (positive integers) and an integer k (group size), determine
the maximum total discount (sum of free ticket prices) that can be obtained by
optimally grouping the tickets. Each ticket can be included in at most one group.
Input: - An integer n (number of tickets) and an integer k (group size), separated
by a space, where O S n IOA5 and 1 k IOA5. - A line with n positive integers
representing the ticket prices. Output: - A single integer: the maximum total
discount (sum of free ticket prices) achievable under the grouping rule.
Constraints: - If k > n, no discount applies (output O). - Grouping should
maximize the sum of the cheapest tickets in each full group of size k. - Time
complexify should be O(n log n); extra space O(n). Notable Edge Cases: - n = O
(no tickets discount = O). - k > n (discount = O). - k = 1 (every ticket is free
discount = sum of all prices).

EXAMPLE 1
Input:5 2
20 10 5 30 15
Output : 30
Explanation : Sorting prices [ 30, 20, 15, 10, 5],
2: freebies are 20 and 10, sum=30.

EXAMPLE 2
Input 4
5555
Output : 5
form groups of
Explanation :One group of 4 yields the cheapest 5 for free,
sum=5.

Requirements
- Read n and k, then an array of n positive integers.
- Compute maximum discount as sum of cheapest tickets in each group of
k.
- Handle edge cases: n=O, k>n, k=l.
- Expect O(n log n) time (sorting) and O(n) additional space.
*/
function main(tickets, groupSize, list) {
  // order list
  const orderedList = list.sort( (a, b) => a-b)
  console.log(orderedList)

  let result = 0

  for( let i = 0; i + groupSize < tickets; i += groupSize) {
    if( i + groupSize - 1 < tickets) {
      result += orderedList[ i + groupSize -1]
    }
  }

 console.log(result)

}

main(5, 2, [20, 10, 5, 30, 15, 40])