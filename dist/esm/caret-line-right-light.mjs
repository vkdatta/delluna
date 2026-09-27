export const name="caret-line-right-light";
export const id="dl_a60ca874260e4a0087a9";
export const url=new URL("../icons/caret-line-right-light.svg?v=994d46f174eb7295fefca83aee88542de8b8ba8bf1712f7347f136b1ba69b25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
