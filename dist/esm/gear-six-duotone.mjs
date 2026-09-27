export const name="gear-six-duotone";
export const id="dl_0532c89f86254b48a9bf";
export const url=new URL("../icons/gear-six-duotone.svg?v=a692c55d7364f39c3f1203ab8de26d7cbe6ec7dea0ed31d7b4fcfe9e5fb57533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
