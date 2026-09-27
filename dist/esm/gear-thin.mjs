export const name="gear-thin";
export const id="dl_2d948715bf3a42889db2";
export const url=new URL("../icons/gear-thin.svg?v=115c75a0e0663b29ba1c7d6a5e318869511200f3a03a4ffc853952b8d5c9ca28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
