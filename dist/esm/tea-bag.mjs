export const name="tea-bag";
export const id="dl_7986c3aa6bd3914394d6";
export const url=new URL("../icons/tea-bag.svg?v=4a76bf5ea647ad861f20ec97affc32f20363ff50a01242ace0056c68c06f0346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
