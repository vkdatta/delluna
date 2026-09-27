export const name="arrow-square-left-bold";
export const id="dl_d6b3b0b6338f40d982d2";
export const url=new URL("../icons/arrow-square-left-bold.svg?v=f4ef9614f2e644327d6d4ce41fc5afddf5dd20aa48fa5591746eba5470e658f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
