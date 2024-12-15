#include <bits/stdc++.h>
using namespace std;

 int maxFrequency(vector<int>& nums, int k, int numop) {
        sort(nums.begin(),nums.end());
        long long i = 0;
        long long sum = 0;
        int freq = 1;
        for(int j = 0; j < nums.size(); ++j){
            sum = sum + nums[j];
            while(((long long )nums[j] * (j - i + 1) - sum) > ((long long)numop * k)){
                sum = sum -  nums[i];
                ++i;
            }
            freq = max(freq,static_cast<int>(j - i + 1));
        }
        return freq;
        
    }

int main() {
    vector<int> nums = {2,70,73};
    int k = 30;
    int numOperations = 2;
    cout << maxFrequency(nums, k, numOperations) << endl;  // Expected output: 2
}
