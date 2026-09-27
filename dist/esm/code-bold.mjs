export const name="code-bold";
export const id="dl_407f90299758456ab66f";
export const url=new URL("../icons/code-bold.svg?v=2d41da16d231b9d6a69bbc8a977776e12b3257bd7f0b669adef76d958795c650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
