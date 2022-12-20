#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

// A range of numbers
struct Range {
  int start, end;
};

// Splits a string on a given character
vector<string> split(const string& s, char delimiter) {
  vector<string> tokens;
  string token;
  istringstream tokenStream(s);
  while (getline(tokenStream, token, delimiter)) {
    tokens.push_back(token);
  }
  return tokens;
}

int main() {
  // Read the input
  vector<pair<Range, Range>> ranges;
  string line;
  while (getline(cin, line)) {
    // Split the line on the comma
    auto parts = split(line, ',');

    // Split the two ranges on the dash
    auto range1 = split(parts[0], '-');
    auto range2 = split(parts[1], '-');

    // Store the ranges in the list
    ranges.push_back({{stoi(range1[0]), stoi(range1[1])}, {stoi(range2[0]), stoi(range2[1])}});
  }

  // Count the number of pairs where one range fully contains the other
  int count = 0;
  for (const auto& [r1, r2] : ranges) {
    if ((r1.start <= r2.start && r1.end >= r2.end) || (r2.start <= r1.start && r2.end >= r1.end)) {
      count++;
    }
  }

  // Output the result
  cout << count << endl;

  return 0;
};
