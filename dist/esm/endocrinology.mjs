export const name="endocrinology";
export const id="dl_7414e66d85ebeaca5f3b";
export const url=new URL("../icons/endocrinology.svg?v=2d07d6dc1bde303216fa63a9e88e1f633c06a39ba574135f9a7840fa8033ac5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
