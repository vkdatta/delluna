export const name="crane-duotone";
export const id="dl_8c0eb6b4bf03494e8be1";
export const url=new URL("../icons/crane-duotone.svg?v=6e426d9440df5abb5ed871f2f6b1d333ef09b7d5567c07b9344b02d87ded6597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
