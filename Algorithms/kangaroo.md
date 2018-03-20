# Kangaroo
You are choreograhing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location as part of the show.

Complete the function kangaroo which takes starting location and speed of both kangaroos as input, and return  or  appropriately. Can you determine if the kangaroos will ever land at the same location at the same time? The two kangaroos must land at the same location after making the same number of jumps.

## Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

## Constraints
* 0 <= x1 < x2 <= 10000
* 1 <= v1 <= 10000
* 1 <= v2 <= 10000

## Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

## Sample Input 0
0 3 4 2

## Sample Output 0
YES
## Explanation 0
The two kangaroos jump through the following sequence of locations:

## Sample Input 1
0 2 5 3

## Sample Output 1
NO

## Explanation 1
The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., ). Because the second kangaroo moves at a faster rate (meaning ) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.