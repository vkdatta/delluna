export const name="mask-sad";
export const id="dl_f9ce8cde71664547bec3";
export const url=new URL("../icons/mask-sad.svg?v=d65692631e6e8951f8051f1e19fcab92acc83c90b81470e23bf038f41f910d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
