export const name="belt-bold";
export const id="dl_482c81be12d1457aaafd";
export const url=new URL("../icons/belt-bold.svg?v=a2c5c7ed07fc7ac2620a92c8e9e9ee503fc6a78bb352f2acbccdd68b5e2576e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
