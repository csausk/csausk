
# Stable Diffusion 人物调参

## 复现

**高度相似的成品 = 相同的 seed + 相同的 size + 相同的 prompts + 相同的 CFG Scale + 相同的 Sampling 相同的 Denoising strength**

- seed & size 影响人物的动作/行为 
- prompts 影响人物的风格特征
- CFG Scale 一般取 `7`, 指定生成时忽视 prompts 的程度
- Sampling 包含 `Sampling Method & Sampling Step` 两项, 对成品的影响程度 `Sampling Method > Sampling Step`. 即采样方法的选择比采样步长的大小更容易影响结果, 但除去风格试验环节, 采样方法一般不轻易更改. 
  - 常见的采样方法中, Euler Method 比 DDIM (生成扩散模型) 更稳定, 但 DDIM 在 **生成** 上往往能取得更好的效果 (相应的, 作画崩坏的概率会更高). 
- 采样步长常取 `20 ≤ x ≤ 30`. 越小采样越随机
- Denoising strength 降噪强度常取 `0.5` 或 `0.75` (default).

## 崩坏控制


