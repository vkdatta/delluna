export const name="arrow-clockwise";
export const id="dl_86ccdf83a02046769358";
export const url=new URL("../icons/arrow-clockwise.svg?v=6b65a989ec756b2dad7b65b1142fd2d5e9055182ee35a0594bdd3b074ec25c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
