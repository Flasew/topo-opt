// Define the links between the nodes
var links = [{source: 0, target: 1, bw: 200000, ring: 127},
{source: 0, target: 3, bw: 200000, ring: 125},
{source: 0, target: 11, bw: 200000, ring: 117},
{source: 0, target: 37, bw: 200000, ring: 91},
{source: 1, target: 2, bw: 200000, ring: 127},
{source: 1, target: 4, bw: 200000, ring: 125},
{source: 1, target: 12, bw: 200000, ring: 117},
{source: 1, target: 38, bw: 200000, ring: 91},
{source: 2, target: 3, bw: 200000, ring: 127},
{source: 2, target: 5, bw: 200000, ring: 125},
{source: 2, target: 13, bw: 200000, ring: 117},
{source: 2, target: 39, bw: 200000, ring: 91},
{source: 3, target: 4, bw: 200000, ring: 127},
{source: 3, target: 6, bw: 200000, ring: 125},
{source: 3, target: 14, bw: 200000, ring: 117},
{source: 3, target: 40, bw: 200000, ring: 91},
{source: 4, target: 5, bw: 200000, ring: 127},
{source: 4, target: 7, bw: 200000, ring: 125},
{source: 4, target: 15, bw: 200000, ring: 117},
{source: 4, target: 41, bw: 200000, ring: 91},
{source: 5, target: 6, bw: 200000, ring: 127},
{source: 5, target: 8, bw: 200000, ring: 125},
{source: 5, target: 16, bw: 200000, ring: 117},
{source: 5, target: 42, bw: 200000, ring: 91},
{source: 6, target: 7, bw: 200000, ring: 127},
{source: 6, target: 9, bw: 200000, ring: 125},
{source: 6, target: 17, bw: 200000, ring: 117},
{source: 6, target: 43, bw: 200000, ring: 91},
{source: 7, target: 8, bw: 200000, ring: 127},
{source: 7, target: 10, bw: 200000, ring: 125},
{source: 7, target: 18, bw: 200000, ring: 117},
{source: 7, target: 44, bw: 200000, ring: 91},
{source: 8, target: 9, bw: 200000, ring: 127},
{source: 8, target: 11, bw: 200000, ring: 125},
{source: 8, target: 19, bw: 200000, ring: 117},
{source: 8, target: 45, bw: 200000, ring: 91},
{source: 9, target: 10, bw: 200000, ring: 127},
{source: 9, target: 12, bw: 200000, ring: 125},
{source: 9, target: 20, bw: 200000, ring: 117},
{source: 9, target: 46, bw: 200000, ring: 91},
{source: 10, target: 11, bw: 200000, ring: 127},
{source: 10, target: 13, bw: 200000, ring: 125},
{source: 10, target: 21, bw: 200000, ring: 117},
{source: 10, target: 47, bw: 200000, ring: 91},
{source: 11, target: 12, bw: 200000, ring: 127},
{source: 11, target: 14, bw: 200000, ring: 125},
{source: 11, target: 22, bw: 200000, ring: 117},
{source: 11, target: 48, bw: 200000, ring: 91},
{source: 12, target: 13, bw: 200000, ring: 127},
{source: 12, target: 15, bw: 200000, ring: 125},
{source: 12, target: 23, bw: 200000, ring: 117},
{source: 12, target: 49, bw: 200000, ring: 91},
{source: 13, target: 14, bw: 200000, ring: 127},
{source: 13, target: 16, bw: 200000, ring: 125},
{source: 13, target: 24, bw: 200000, ring: 117},
{source: 13, target: 50, bw: 200000, ring: 91},
{source: 14, target: 15, bw: 200000, ring: 127},
{source: 14, target: 17, bw: 200000, ring: 125},
{source: 14, target: 25, bw: 200000, ring: 117},
{source: 14, target: 51, bw: 200000, ring: 91},
{source: 15, target: 16, bw: 200000, ring: 127},
{source: 15, target: 18, bw: 200000, ring: 125},
{source: 15, target: 26, bw: 200000, ring: 117},
{source: 15, target: 52, bw: 200000, ring: 91},
{source: 16, target: 17, bw: 200000, ring: 127},
{source: 16, target: 19, bw: 200000, ring: 125},
{source: 16, target: 27, bw: 200000, ring: 117},
{source: 16, target: 53, bw: 200000, ring: 91},
{source: 17, target: 18, bw: 200000, ring: 127},
{source: 17, target: 20, bw: 200000, ring: 125},
{source: 17, target: 28, bw: 200000, ring: 117},
{source: 17, target: 54, bw: 200000, ring: 91},
{source: 18, target: 19, bw: 200000, ring: 127},
{source: 18, target: 21, bw: 200000, ring: 125},
{source: 18, target: 29, bw: 200000, ring: 117},
{source: 18, target: 55, bw: 200000, ring: 91},
{source: 19, target: 20, bw: 200000, ring: 127},
{source: 19, target: 22, bw: 200000, ring: 125},
{source: 19, target: 30, bw: 200000, ring: 117},
{source: 19, target: 56, bw: 200000, ring: 91},
{source: 20, target: 21, bw: 200000, ring: 127},
{source: 20, target: 23, bw: 200000, ring: 125},
{source: 20, target: 31, bw: 200000, ring: 117},
{source: 20, target: 57, bw: 200000, ring: 91},
{source: 21, target: 22, bw: 200000, ring: 127},
{source: 21, target: 24, bw: 200000, ring: 125},
{source: 21, target: 32, bw: 200000, ring: 117},
{source: 21, target: 58, bw: 200000, ring: 91},
{source: 22, target: 23, bw: 200000, ring: 127},
{source: 22, target: 25, bw: 200000, ring: 125},
{source: 22, target: 33, bw: 200000, ring: 117},
{source: 22, target: 59, bw: 200000, ring: 91},
{source: 23, target: 24, bw: 200000, ring: 127},
{source: 23, target: 26, bw: 200000, ring: 125},
{source: 23, target: 34, bw: 200000, ring: 117},
{source: 23, target: 60, bw: 200000, ring: 91},
{source: 24, target: 25, bw: 200000, ring: 127},
{source: 24, target: 27, bw: 200000, ring: 125},
{source: 24, target: 35, bw: 200000, ring: 117},
{source: 24, target: 61, bw: 200000, ring: 91},
{source: 25, target: 26, bw: 200000, ring: 127},
{source: 25, target: 28, bw: 200000, ring: 125},
{source: 25, target: 36, bw: 200000, ring: 117},
{source: 25, target: 62, bw: 200000, ring: 91},
{source: 26, target: 27, bw: 200000, ring: 127},
{source: 26, target: 29, bw: 200000, ring: 125},
{source: 26, target: 37, bw: 200000, ring: 117},
{source: 26, target: 63, bw: 200000, ring: 91},
{source: 27, target: 28, bw: 200000, ring: 127},
{source: 27, target: 30, bw: 200000, ring: 125},
{source: 27, target: 38, bw: 200000, ring: 117},
{source: 27, target: 64, bw: 200000, ring: 91},
{source: 28, target: 29, bw: 200000, ring: 127},
{source: 28, target: 31, bw: 200000, ring: 125},
{source: 28, target: 39, bw: 200000, ring: 117},
{source: 28, target: 65, bw: 200000, ring: 91},
{source: 29, target: 30, bw: 200000, ring: 127},
{source: 29, target: 32, bw: 200000, ring: 125},
{source: 29, target: 40, bw: 200000, ring: 117},
{source: 29, target: 66, bw: 200000, ring: 91},
{source: 30, target: 31, bw: 200000, ring: 127},
{source: 30, target: 33, bw: 200000, ring: 125},
{source: 30, target: 41, bw: 200000, ring: 117},
{source: 30, target: 67, bw: 200000, ring: 91},
{source: 31, target: 32, bw: 200000, ring: 127},
{source: 31, target: 34, bw: 200000, ring: 125},
{source: 31, target: 42, bw: 200000, ring: 117},
{source: 31, target: 68, bw: 200000, ring: 91},
{source: 32, target: 33, bw: 200000, ring: 127},
{source: 32, target: 35, bw: 200000, ring: 125},
{source: 32, target: 43, bw: 200000, ring: 117},
{source: 32, target: 69, bw: 200000, ring: 91},
{source: 33, target: 34, bw: 200000, ring: 127},
{source: 33, target: 36, bw: 200000, ring: 125},
{source: 33, target: 44, bw: 200000, ring: 117},
{source: 33, target: 70, bw: 200000, ring: 91},
{source: 34, target: 35, bw: 200000, ring: 127},
{source: 34, target: 37, bw: 200000, ring: 125},
{source: 34, target: 45, bw: 200000, ring: 117},
{source: 34, target: 71, bw: 200000, ring: 91},
{source: 35, target: 36, bw: 200000, ring: 127},
{source: 35, target: 38, bw: 200000, ring: 125},
{source: 35, target: 46, bw: 200000, ring: 117},
{source: 35, target: 72, bw: 200000, ring: 91},
{source: 36, target: 37, bw: 200000, ring: 127},
{source: 36, target: 39, bw: 200000, ring: 125},
{source: 36, target: 47, bw: 200000, ring: 117},
{source: 36, target: 73, bw: 200000, ring: 91},
{source: 37, target: 38, bw: 200000, ring: 127},
{source: 37, target: 40, bw: 200000, ring: 125},
{source: 37, target: 48, bw: 200000, ring: 117},
{source: 37, target: 74, bw: 200000, ring: 91},
{source: 38, target: 39, bw: 200000, ring: 127},
{source: 38, target: 41, bw: 200000, ring: 125},
{source: 38, target: 49, bw: 200000, ring: 117},
{source: 38, target: 75, bw: 200000, ring: 91},
{source: 39, target: 40, bw: 200000, ring: 127},
{source: 39, target: 42, bw: 200000, ring: 125},
{source: 39, target: 50, bw: 200000, ring: 117},
{source: 39, target: 76, bw: 200000, ring: 91},
{source: 40, target: 41, bw: 200000, ring: 127},
{source: 40, target: 43, bw: 200000, ring: 125},
{source: 40, target: 51, bw: 200000, ring: 117},
{source: 40, target: 77, bw: 200000, ring: 91},
{source: 41, target: 42, bw: 200000, ring: 127},
{source: 41, target: 44, bw: 200000, ring: 125},
{source: 41, target: 52, bw: 200000, ring: 117},
{source: 41, target: 78, bw: 200000, ring: 91},
{source: 42, target: 43, bw: 200000, ring: 127},
{source: 42, target: 45, bw: 200000, ring: 125},
{source: 42, target: 53, bw: 200000, ring: 117},
{source: 42, target: 79, bw: 200000, ring: 91},
{source: 43, target: 44, bw: 200000, ring: 127},
{source: 43, target: 46, bw: 200000, ring: 125},
{source: 43, target: 54, bw: 200000, ring: 117},
{source: 43, target: 80, bw: 200000, ring: 91},
{source: 44, target: 45, bw: 200000, ring: 127},
{source: 44, target: 47, bw: 200000, ring: 125},
{source: 44, target: 55, bw: 200000, ring: 117},
{source: 44, target: 81, bw: 200000, ring: 91},
{source: 45, target: 46, bw: 200000, ring: 127},
{source: 45, target: 48, bw: 200000, ring: 125},
{source: 45, target: 56, bw: 200000, ring: 117},
{source: 45, target: 82, bw: 200000, ring: 91},
{source: 46, target: 47, bw: 200000, ring: 127},
{source: 46, target: 49, bw: 200000, ring: 125},
{source: 46, target: 57, bw: 200000, ring: 117},
{source: 46, target: 83, bw: 200000, ring: 91},
{source: 47, target: 48, bw: 200000, ring: 127},
{source: 47, target: 50, bw: 200000, ring: 125},
{source: 47, target: 58, bw: 200000, ring: 117},
{source: 47, target: 84, bw: 200000, ring: 91},
{source: 48, target: 49, bw: 200000, ring: 127},
{source: 48, target: 51, bw: 200000, ring: 125},
{source: 48, target: 59, bw: 200000, ring: 117},
{source: 48, target: 85, bw: 200000, ring: 91},
{source: 49, target: 50, bw: 200000, ring: 127},
{source: 49, target: 52, bw: 200000, ring: 125},
{source: 49, target: 60, bw: 200000, ring: 117},
{source: 49, target: 86, bw: 200000, ring: 91},
{source: 50, target: 51, bw: 200000, ring: 127},
{source: 50, target: 53, bw: 200000, ring: 125},
{source: 50, target: 61, bw: 200000, ring: 117},
{source: 50, target: 87, bw: 200000, ring: 91},
{source: 51, target: 52, bw: 200000, ring: 127},
{source: 51, target: 54, bw: 200000, ring: 125},
{source: 51, target: 62, bw: 200000, ring: 117},
{source: 51, target: 88, bw: 200000, ring: 91},
{source: 52, target: 53, bw: 200000, ring: 127},
{source: 52, target: 55, bw: 200000, ring: 125},
{source: 52, target: 63, bw: 200000, ring: 117},
{source: 52, target: 89, bw: 200000, ring: 91},
{source: 53, target: 54, bw: 200000, ring: 127},
{source: 53, target: 56, bw: 200000, ring: 125},
{source: 53, target: 64, bw: 200000, ring: 117},
{source: 53, target: 90, bw: 200000, ring: 91},
{source: 54, target: 55, bw: 200000, ring: 127},
{source: 54, target: 57, bw: 200000, ring: 125},
{source: 54, target: 65, bw: 200000, ring: 117},
{source: 54, target: 91, bw: 200000, ring: 91},
{source: 55, target: 56, bw: 200000, ring: 127},
{source: 55, target: 58, bw: 200000, ring: 125},
{source: 55, target: 66, bw: 200000, ring: 117},
{source: 55, target: 92, bw: 200000, ring: 91},
{source: 56, target: 57, bw: 200000, ring: 127},
{source: 56, target: 59, bw: 200000, ring: 125},
{source: 56, target: 67, bw: 200000, ring: 117},
{source: 56, target: 93, bw: 200000, ring: 91},
{source: 57, target: 58, bw: 200000, ring: 127},
{source: 57, target: 60, bw: 200000, ring: 125},
{source: 57, target: 68, bw: 200000, ring: 117},
{source: 57, target: 94, bw: 200000, ring: 91},
{source: 58, target: 59, bw: 200000, ring: 127},
{source: 58, target: 61, bw: 200000, ring: 125},
{source: 58, target: 69, bw: 200000, ring: 117},
{source: 58, target: 95, bw: 200000, ring: 91},
{source: 59, target: 60, bw: 200000, ring: 127},
{source: 59, target: 62, bw: 200000, ring: 125},
{source: 59, target: 70, bw: 200000, ring: 117},
{source: 59, target: 96, bw: 200000, ring: 91},
{source: 60, target: 61, bw: 200000, ring: 127},
{source: 60, target: 63, bw: 200000, ring: 125},
{source: 60, target: 71, bw: 200000, ring: 117},
{source: 60, target: 97, bw: 200000, ring: 91},
{source: 61, target: 62, bw: 200000, ring: 127},
{source: 61, target: 64, bw: 200000, ring: 125},
{source: 61, target: 72, bw: 200000, ring: 117},
{source: 61, target: 98, bw: 200000, ring: 91},
{source: 62, target: 63, bw: 200000, ring: 127},
{source: 62, target: 65, bw: 200000, ring: 125},
{source: 62, target: 73, bw: 200000, ring: 117},
{source: 62, target: 99, bw: 200000, ring: 91},
{source: 63, target: 64, bw: 200000, ring: 127},
{source: 63, target: 66, bw: 200000, ring: 125},
{source: 63, target: 74, bw: 200000, ring: 117},
{source: 63, target: 100, bw: 200000, ring: 91},
{source: 64, target: 65, bw: 200000, ring: 127},
{source: 64, target: 67, bw: 200000, ring: 125},
{source: 64, target: 75, bw: 200000, ring: 117},
{source: 64, target: 101, bw: 200000, ring: 91},
{source: 65, target: 66, bw: 200000, ring: 127},
{source: 65, target: 68, bw: 200000, ring: 125},
{source: 65, target: 76, bw: 200000, ring: 117},
{source: 65, target: 102, bw: 200000, ring: 91},
{source: 66, target: 67, bw: 200000, ring: 127},
{source: 66, target: 69, bw: 200000, ring: 125},
{source: 66, target: 77, bw: 200000, ring: 117},
{source: 66, target: 103, bw: 200000, ring: 91},
{source: 67, target: 68, bw: 200000, ring: 127},
{source: 67, target: 70, bw: 200000, ring: 125},
{source: 67, target: 78, bw: 200000, ring: 117},
{source: 67, target: 104, bw: 200000, ring: 91},
{source: 68, target: 69, bw: 200000, ring: 127},
{source: 68, target: 71, bw: 200000, ring: 125},
{source: 68, target: 79, bw: 200000, ring: 117},
{source: 68, target: 105, bw: 200000, ring: 91},
{source: 69, target: 70, bw: 200000, ring: 127},
{source: 69, target: 72, bw: 200000, ring: 125},
{source: 69, target: 80, bw: 200000, ring: 117},
{source: 69, target: 106, bw: 200000, ring: 91},
{source: 70, target: 71, bw: 200000, ring: 127},
{source: 70, target: 73, bw: 200000, ring: 125},
{source: 70, target: 81, bw: 200000, ring: 117},
{source: 70, target: 107, bw: 200000, ring: 91},
{source: 71, target: 72, bw: 200000, ring: 127},
{source: 71, target: 74, bw: 200000, ring: 125},
{source: 71, target: 82, bw: 200000, ring: 117},
{source: 71, target: 108, bw: 200000, ring: 91},
{source: 72, target: 73, bw: 200000, ring: 127},
{source: 72, target: 75, bw: 200000, ring: 125},
{source: 72, target: 83, bw: 200000, ring: 117},
{source: 72, target: 109, bw: 200000, ring: 91},
{source: 73, target: 74, bw: 200000, ring: 127},
{source: 73, target: 76, bw: 200000, ring: 125},
{source: 73, target: 84, bw: 200000, ring: 117},
{source: 73, target: 110, bw: 200000, ring: 91},
{source: 74, target: 75, bw: 200000, ring: 127},
{source: 74, target: 77, bw: 200000, ring: 125},
{source: 74, target: 85, bw: 200000, ring: 117},
{source: 74, target: 111, bw: 200000, ring: 91},
{source: 75, target: 76, bw: 200000, ring: 127},
{source: 75, target: 78, bw: 200000, ring: 125},
{source: 75, target: 86, bw: 200000, ring: 117},
{source: 75, target: 112, bw: 200000, ring: 91},
{source: 76, target: 77, bw: 200000, ring: 127},
{source: 76, target: 79, bw: 200000, ring: 125},
{source: 76, target: 87, bw: 200000, ring: 117},
{source: 76, target: 113, bw: 200000, ring: 91},
{source: 77, target: 78, bw: 200000, ring: 127},
{source: 77, target: 80, bw: 200000, ring: 125},
{source: 77, target: 88, bw: 200000, ring: 117},
{source: 77, target: 114, bw: 200000, ring: 91},
{source: 78, target: 79, bw: 200000, ring: 127},
{source: 78, target: 81, bw: 200000, ring: 125},
{source: 78, target: 89, bw: 200000, ring: 117},
{source: 78, target: 115, bw: 200000, ring: 91},
{source: 79, target: 80, bw: 200000, ring: 127},
{source: 79, target: 82, bw: 200000, ring: 125},
{source: 79, target: 90, bw: 200000, ring: 117},
{source: 79, target: 116, bw: 200000, ring: 91},
{source: 80, target: 81, bw: 200000, ring: 127},
{source: 80, target: 83, bw: 200000, ring: 125},
{source: 80, target: 91, bw: 200000, ring: 117},
{source: 80, target: 117, bw: 200000, ring: 91},
{source: 81, target: 82, bw: 200000, ring: 127},
{source: 81, target: 84, bw: 200000, ring: 125},
{source: 81, target: 92, bw: 200000, ring: 117},
{source: 81, target: 118, bw: 200000, ring: 91},
{source: 82, target: 83, bw: 200000, ring: 127},
{source: 82, target: 85, bw: 200000, ring: 125},
{source: 82, target: 93, bw: 200000, ring: 117},
{source: 82, target: 119, bw: 200000, ring: 91},
{source: 83, target: 84, bw: 200000, ring: 127},
{source: 83, target: 86, bw: 200000, ring: 125},
{source: 83, target: 94, bw: 200000, ring: 117},
{source: 83, target: 120, bw: 200000, ring: 91},
{source: 84, target: 85, bw: 200000, ring: 127},
{source: 84, target: 87, bw: 200000, ring: 125},
{source: 84, target: 95, bw: 200000, ring: 117},
{source: 84, target: 121, bw: 200000, ring: 91},
{source: 85, target: 86, bw: 200000, ring: 127},
{source: 85, target: 88, bw: 200000, ring: 125},
{source: 85, target: 96, bw: 200000, ring: 117},
{source: 85, target: 122, bw: 200000, ring: 91},
{source: 86, target: 87, bw: 200000, ring: 127},
{source: 86, target: 89, bw: 200000, ring: 125},
{source: 86, target: 97, bw: 200000, ring: 117},
{source: 86, target: 123, bw: 200000, ring: 91},
{source: 87, target: 88, bw: 200000, ring: 127},
{source: 87, target: 90, bw: 200000, ring: 125},
{source: 87, target: 98, bw: 200000, ring: 117},
{source: 87, target: 124, bw: 200000, ring: 91},
{source: 88, target: 89, bw: 200000, ring: 127},
{source: 88, target: 91, bw: 200000, ring: 125},
{source: 88, target: 99, bw: 200000, ring: 117},
{source: 88, target: 125, bw: 200000, ring: 91},
{source: 89, target: 90, bw: 200000, ring: 127},
{source: 89, target: 92, bw: 200000, ring: 125},
{source: 89, target: 100, bw: 200000, ring: 117},
{source: 89, target: 126, bw: 200000, ring: 91},
{source: 90, target: 91, bw: 200000, ring: 127},
{source: 90, target: 93, bw: 200000, ring: 125},
{source: 90, target: 101, bw: 200000, ring: 117},
{source: 90, target: 127, bw: 200000, ring: 91},
{source: 91, target: 92, bw: 200000, ring: 127},
{source: 91, target: 94, bw: 200000, ring: 125},
{source: 91, target: 102, bw: 200000, ring: 117},
{source: 91, target: 0, bw: 200000, ring: 91},
{source: 92, target: 93, bw: 200000, ring: 127},
{source: 92, target: 95, bw: 200000, ring: 125},
{source: 92, target: 103, bw: 200000, ring: 117},
{source: 92, target: 1, bw: 200000, ring: 91},
{source: 93, target: 94, bw: 200000, ring: 127},
{source: 93, target: 96, bw: 200000, ring: 125},
{source: 93, target: 104, bw: 200000, ring: 117},
{source: 93, target: 2, bw: 200000, ring: 91},
{source: 94, target: 95, bw: 200000, ring: 127},
{source: 94, target: 97, bw: 200000, ring: 125},
{source: 94, target: 105, bw: 200000, ring: 117},
{source: 94, target: 3, bw: 200000, ring: 91},
{source: 95, target: 96, bw: 200000, ring: 127},
{source: 95, target: 98, bw: 200000, ring: 125},
{source: 95, target: 106, bw: 200000, ring: 117},
{source: 95, target: 4, bw: 200000, ring: 91},
{source: 96, target: 97, bw: 200000, ring: 127},
{source: 96, target: 99, bw: 200000, ring: 125},
{source: 96, target: 107, bw: 200000, ring: 117},
{source: 96, target: 5, bw: 200000, ring: 91},
{source: 97, target: 98, bw: 200000, ring: 127},
{source: 97, target: 100, bw: 200000, ring: 125},
{source: 97, target: 108, bw: 200000, ring: 117},
{source: 97, target: 6, bw: 200000, ring: 91},
{source: 98, target: 99, bw: 200000, ring: 127},
{source: 98, target: 101, bw: 200000, ring: 125},
{source: 98, target: 109, bw: 200000, ring: 117},
{source: 98, target: 7, bw: 200000, ring: 91},
{source: 99, target: 100, bw: 200000, ring: 127},
{source: 99, target: 102, bw: 200000, ring: 125},
{source: 99, target: 110, bw: 200000, ring: 117},
{source: 99, target: 8, bw: 200000, ring: 91},
{source: 100, target: 101, bw: 200000, ring: 127},
{source: 100, target: 103, bw: 200000, ring: 125},
{source: 100, target: 111, bw: 200000, ring: 117},
{source: 100, target: 9, bw: 200000, ring: 91},
{source: 101, target: 102, bw: 200000, ring: 127},
{source: 101, target: 104, bw: 200000, ring: 125},
{source: 101, target: 112, bw: 200000, ring: 117},
{source: 101, target: 10, bw: 200000, ring: 91},
{source: 102, target: 103, bw: 200000, ring: 127},
{source: 102, target: 105, bw: 200000, ring: 125},
{source: 102, target: 113, bw: 200000, ring: 117},
{source: 102, target: 11, bw: 200000, ring: 91},
{source: 103, target: 104, bw: 200000, ring: 127},
{source: 103, target: 106, bw: 200000, ring: 125},
{source: 103, target: 114, bw: 200000, ring: 117},
{source: 103, target: 12, bw: 200000, ring: 91},
{source: 104, target: 105, bw: 200000, ring: 127},
{source: 104, target: 107, bw: 200000, ring: 125},
{source: 104, target: 115, bw: 200000, ring: 117},
{source: 104, target: 13, bw: 200000, ring: 91},
{source: 105, target: 106, bw: 200000, ring: 127},
{source: 105, target: 108, bw: 200000, ring: 125},
{source: 105, target: 116, bw: 200000, ring: 117},
{source: 105, target: 14, bw: 200000, ring: 91},
{source: 106, target: 107, bw: 200000, ring: 127},
{source: 106, target: 109, bw: 200000, ring: 125},
{source: 106, target: 117, bw: 200000, ring: 117},
{source: 106, target: 15, bw: 200000, ring: 91},
{source: 107, target: 108, bw: 200000, ring: 127},
{source: 107, target: 110, bw: 200000, ring: 125},
{source: 107, target: 118, bw: 200000, ring: 117},
{source: 107, target: 16, bw: 200000, ring: 91},
{source: 108, target: 109, bw: 200000, ring: 127},
{source: 108, target: 111, bw: 200000, ring: 125},
{source: 108, target: 119, bw: 200000, ring: 117},
{source: 108, target: 17, bw: 200000, ring: 91},
{source: 109, target: 110, bw: 200000, ring: 127},
{source: 109, target: 112, bw: 200000, ring: 125},
{source: 109, target: 120, bw: 200000, ring: 117},
{source: 109, target: 18, bw: 200000, ring: 91},
{source: 110, target: 111, bw: 200000, ring: 127},
{source: 110, target: 113, bw: 200000, ring: 125},
{source: 110, target: 121, bw: 200000, ring: 117},
{source: 110, target: 19, bw: 200000, ring: 91},
{source: 111, target: 112, bw: 200000, ring: 127},
{source: 111, target: 114, bw: 200000, ring: 125},
{source: 111, target: 122, bw: 200000, ring: 117},
{source: 111, target: 20, bw: 200000, ring: 91},
{source: 112, target: 113, bw: 200000, ring: 127},
{source: 112, target: 115, bw: 200000, ring: 125},
{source: 112, target: 123, bw: 200000, ring: 117},
{source: 112, target: 21, bw: 200000, ring: 91},
{source: 113, target: 114, bw: 200000, ring: 127},
{source: 113, target: 116, bw: 200000, ring: 125},
{source: 113, target: 124, bw: 200000, ring: 117},
{source: 113, target: 22, bw: 200000, ring: 91},
{source: 114, target: 115, bw: 200000, ring: 127},
{source: 114, target: 117, bw: 200000, ring: 125},
{source: 114, target: 125, bw: 200000, ring: 117},
{source: 114, target: 23, bw: 200000, ring: 91},
{source: 115, target: 116, bw: 200000, ring: 127},
{source: 115, target: 118, bw: 200000, ring: 125},
{source: 115, target: 126, bw: 200000, ring: 117},
{source: 115, target: 24, bw: 200000, ring: 91},
{source: 116, target: 117, bw: 200000, ring: 127},
{source: 116, target: 119, bw: 200000, ring: 125},
{source: 116, target: 127, bw: 200000, ring: 117},
{source: 116, target: 25, bw: 200000, ring: 91},
{source: 117, target: 118, bw: 200000, ring: 127},
{source: 117, target: 120, bw: 200000, ring: 125},
{source: 117, target: 0, bw: 200000, ring: 117},
{source: 117, target: 26, bw: 200000, ring: 91},
{source: 118, target: 119, bw: 200000, ring: 127},
{source: 118, target: 121, bw: 200000, ring: 125},
{source: 118, target: 1, bw: 200000, ring: 117},
{source: 118, target: 27, bw: 200000, ring: 91},
{source: 119, target: 120, bw: 200000, ring: 127},
{source: 119, target: 122, bw: 200000, ring: 125},
{source: 119, target: 2, bw: 200000, ring: 117},
{source: 119, target: 28, bw: 200000, ring: 91},
{source: 120, target: 121, bw: 200000, ring: 127},
{source: 120, target: 123, bw: 200000, ring: 125},
{source: 120, target: 3, bw: 200000, ring: 117},
{source: 120, target: 29, bw: 200000, ring: 91},
{source: 121, target: 122, bw: 200000, ring: 127},
{source: 121, target: 124, bw: 200000, ring: 125},
{source: 121, target: 4, bw: 200000, ring: 117},
{source: 121, target: 30, bw: 200000, ring: 91},
{source: 122, target: 123, bw: 200000, ring: 127},
{source: 122, target: 125, bw: 200000, ring: 125},
{source: 122, target: 5, bw: 200000, ring: 117},
{source: 122, target: 31, bw: 200000, ring: 91},
{source: 123, target: 124, bw: 200000, ring: 127},
{source: 123, target: 126, bw: 200000, ring: 125},
{source: 123, target: 6, bw: 200000, ring: 117},
{source: 123, target: 32, bw: 200000, ring: 91},
{source: 124, target: 125, bw: 200000, ring: 127},
{source: 124, target: 127, bw: 200000, ring: 125},
{source: 124, target: 7, bw: 200000, ring: 117},
{source: 124, target: 33, bw: 200000, ring: 91},
{source: 125, target: 126, bw: 200000, ring: 127},
{source: 125, target: 0, bw: 200000, ring: 125},
{source: 125, target: 8, bw: 200000, ring: 117},
{source: 125, target: 34, bw: 200000, ring: 91},
{source: 126, target: 127, bw: 200000, ring: 127},
{source: 126, target: 1, bw: 200000, ring: 125},
{source: 126, target: 9, bw: 200000, ring: 117},
{source: 126, target: 35, bw: 200000, ring: 91},
{source: 127, target: 0, bw: 200000, ring: 127},
{source: 127, target: 2, bw: 200000, ring: 125},
{source: 127, target: 10, bw: 200000, ring: 117},
{source: 127, target: 36, bw: 200000, ring: 91}];

var fbBlue = d3.rgb("#3b5998"),
    fill = [fbBlue.brighter(2), fbBlue.brighter(), fbBlue, fbBlue.darker()];

// Compute the distinct nodes from the links
var nodes = {};
links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = { id: link.source, ring: link.ring });
    link.target = nodes[link.target] || (nodes[link.target] = { id: link.target, ring: link.ring });
});

var margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var radius = Math.min(width, height) / 2- 50;
var rBig = Math.min(width, height) / 2- 70;
var rSmall = rBig*3/2;
var centerX = width / 2;
var centerY = height / 2;

var circleLayout = d3.forceSimulation()
  .force("x", d3.forceX().strength(0.3).x(function(d) {
    // If the node index is even, place it in the big circle
    if (d.id % 2 == 0) {
      var angle = d.id * 2 * Math.PI / Object.keys(nodes).length;
      return centerX + rBig * Math.cos(angle);
    }
    // If the node id is odd, place it in the small circle
    else {
      var angle = (d.id - 1) * 2 * Math.PI / (Object.keys(nodes).length - 1);
      return centerX + rSmall * Math.cos(angle);
    }
  }))
  .force("y", d3.forceY().strength(0.3).y(function(d) {
    // If the node id is even, place it in the big circle
    if (d.id % 2 == 0) {
      var angle = d.id * 2 * Math.PI / Object.keys(nodes).length;
      return centerY + rBig * Math.sin(angle);
    }
    // If the node id is odd, place it in the small circle
    else {
      var angle = (d.id - 1) * 2 * Math.PI / (Object.keys(nodes).length - 1);
      return centerY + rSmall * Math.sin(angle);
    }
  }));

// var circleLayout = d3.forceSimulation()
//     .force("center", d3.forceCenter(centerX, centerY))
//     .force("x", d3.forceX().strength(0.3).x(function(d) { return centerX + radius * Math.cos(d.id * 2 * Math.PI / Object.keys(nodes).length); }))
//     .force("y", d3.forceY().strength(0.3).y(function(d) { return centerY + radius * Math.sin(d.id * 2 * Math.PI / Object.keys(nodes).length); }));  

var force = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) { return d.id; }).links(links))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("center", d3.forceCenter(200, 150));

// Set up the SVG canvas and the force layout
// append the svg object to the body of the page
var svg = d3.select("#graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

svg.append("defs").append("marker")
.attr("id", "arrowhead")
.attr("viewBox", "0 -5 10 10")
.attr("refX", 15)
.attr("refY", 0)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M0,-5L10,0L0,5")
// .attr("d", "M-5,-10 L5,-10 Q 0,-5 -5,-10 Z")
// .attr("d", "M0,0 L5,5 L10,0 L5,-5Z")
// .attr("d", "M0,-5A5,5 0 1,1 0,5A5,5 0 1,1 0,-5") //circle
// .attr("d", "M0,-5L10,0L0,5") //normal
.attr("class","arrowHead");

svg.append("defs").append("marker")
.attr("id", "arrowtail")
.attr("viewBox", "0 -5 10 10")
.attr("refX", -5)
.attr("refY", 0)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M10,-5L0,0L10,5")
.attr("class","arrowTail");



// svg.append("defs").append("marker")
//     .attr("id", "middle-arrow")
//     .attr("viewBox", "0 -5 10 10")
//     .attr("refX", 0)
//     .attr("refY", 0)
//     .attr("markerWidth", 6)
//     .attr("markerHeight", 6)
//     .attr("orient", "auto")
//     .append("path")
//     .attr("d", "M0,-5L10,0L0,5")
//     .style("fill", "grey");

// Draw the links
var link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", function (d) {
        if (d.ring === 127) {
            return "#D32C43";
            } else if (d.ring === 125) {
              return "#96D32C";
        } else if (d.ring === 117) {
            return "#2CD3BC";
        } else if (d.ring === 91) {
            return "#692CD3";
        } else {
            return "grey";
        }
    })
    .style("stroke-opacity", function (d) {
        if (d.ring == 0) {
            return 0.1;
        }
        else {
            return 1;
        }
    })
    // .attr("marker-end", "url(#arrowhead)")
    .style("stroke-width", 1);

// Draw the nodes
var node = svg.selectAll(".node")
    .data(Object.values(nodes))
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 5)
    .style("fill", "#3b5998")
    .style("stroke", "#fff")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


// var force = d3.forceSimulation()
//     .force("link", d3.forceLink().id(function(d) { return d.id; }).links(links))
//     .force("charge", d3.forceManyBody().strength(-200))
//     .force("center", d3.forceCenter(width / 2, height / 2))
//     .force("y", d3.forceY(height / 2).strength(0.1))
//     .force("x", d3.forceX(width / 2).strength(0.1))
//     .force("collision", d3.forceCollide().radius(15))

// Add labels to the nodes
node.append("title")
    .text(function (d) { return d.id; });

// Run the simulation
// force.nodes(Object.values(nodes))
//     .on("tick", ticked);

circleLayout.nodes(Object.values(nodes))
    .on("tick", ticked);

// Define the tick function
function ticked() {
    link
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    node
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
}

var drag = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);


// Define the drag functions
function dragstarted(d) {
    if (!d3.event.active) circleLayout.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) circleLayout.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// Add this code to create the arrow marker
// svg.append("defs")
// .append("marker")
// .attr("id", "arrow")
// .attr("viewBox", "0 -5 10 10")
// .attr("refX", 5)
// .attr("refY", 0)
// .attr("markerWidth", 4)
// .attr("markerHeight", 4)
// .attr("orient", "auto")
// .append("path")
// .attr("d", "M0,-5L10,0L0,5")
// .attr("fill", "#black");



function highlightLink(source, target) {
    path = bfs(source, target);
    console.log(path);
    link
      .style("stroke-opacity", function (d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        return sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1 ? 1 : 0.1;
      })
    //   .attr("marker-end", function (d) {
    //     const sourceIndex = path.indexOf(d.source.id);
    //     const targetIndex = path.indexOf(d.target.id);
    //     return sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1 ? "url(#arrowhead)" : "";
    //   });
    .attr("marker-end", function (d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        if (sourceIndex !== -1 && targetIndex !== -1 && Math.abs(sourceIndex - targetIndex) === 1) {
          if (sourceIndex < targetIndex) {
            return "url(#arrowhead)";
          } else {
            return "";
          }
        } else {
          return "";
        }
      })
    .attr("marker-start", function(d) {
        const sourceIndex = path.indexOf(d.source.id);
        const targetIndex = path.indexOf(d.target.id);
        return sourceIndex !== -1 && targetIndex !== -1 && sourceIndex - targetIndex === 1 ? "url(#arrowtail)" : "";
      })
    node
    .style("opacity", function (d){
        return path.includes(d.id) ? 1 : 0.1;
    });
}
  
function resetGraph() {
    link
      .style("stroke-opacity", function (d) {
        return d.ring == 0 ? 0.1 : 1;
      })
      .attr("marker-end", "")
      .attr("marker-start", "");
  
    node.style("opacity", 1);
}

// function bfs(source, target) {
//   // Initialize visited and queue
//   const visited = {};
//   const queue = [];
//   path = [];

//   // Mark the source as visited and enqueue it
//   visited[source.id] = source.id;
//   queue.push(source);

//   // Loop until the queue is empty
//   while (queue.length > 0) {
//     // Dequeue a path from the queue
//     const node = queue.shift();
//     // path.push(node.id);
//     // const node = path[path.length - 1];

//     // If the target is found, return the path
//     if (node.id === target.id) {
//       return visited;
//     }

//     // Enqueue all the adjacent nodes that haven't been visited
//     const adjacentNodes = getAdjacentNodes(node);
//     for (let i = 0; i < adjacentNodes.length; i++) {
//       const adjacentNode = adjacentNodes[i];
//       if (!visited[adjacentNode.id]) {
//         visited[adjacentNode.id] = node.id;
//         // const newPath = path.concat([adjacentNode]);
//         queue.push(adjacentNode);
//       }
//     }
//   }

//   // If the target wasn't found, return an empty path
//   return [];
// }

// function getAdjacentNodes(node) {
//   const adjacentNodes = [];
//   for (let i = 0; i < links.length; i++) {
//     const link = links[i];
//     if (link.source.id === node.id) {
//       adjacentNodes.push(link.target);
//     } else if (link.target.id === node.id) {
//       adjacentNodes.push(link.source);
//     }
//   }
//   return adjacentNodes;
// }

function bfs(source, target) {
    // Initialize visited and queue
    const visited = {};
    const queue = [];
  
    // Mark the source as visited and enqueue it
    visited[source] = null;
    queue.push(source);
  
    // Loop until the queue is empty
    while (queue.length > 0) {
      // Dequeue a node from the queue
      const node = queue.shift();
  
      // If the target is found, build and return the path
      if (node === target) {
        console.log("AA");
        path = [node];
        console.log(path);
        let parent = visited[node];
        console.log(parent);
        while (parent !== null) {
          console.log(parent);
          path.push(parent);
          parent = visited[parent];
        }
        return path;
      }
  
      // Enqueue all the adjacent nodes that haven't been visited
      const adjacentNodes = getAdjacentNodes(node);
      for (let i = 0; i < adjacentNodes.length; i++) {
        const adjacentNode = adjacentNodes[i];
        if (!visited.hasOwnProperty(adjacentNode)) {
          visited[adjacentNode] = node;
          queue.push(adjacentNode);
        }
      }
    }
  
    // If the target wasn't found, return an empty path
    return [];
  }
  
  
  function getAdjacentNodes(node) {
    const adjacentNodes = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link.source.id === node) {
        adjacentNodes.push(link.target.id);
      } else if (link.target.id === node) {
        adjacentNodes.push(link.source.id);
      }
    }
    return adjacentNodes;
  }
  
  