export const name="golf-light";
export const id="dl_7b5ae2d51be64afe98c1";
export const url=new URL("../icons/golf-light.svg?v=d9e67857d719e4f6f2c81ff4162563d67a4058cfc6d97e07a06a34fe3f04b03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
