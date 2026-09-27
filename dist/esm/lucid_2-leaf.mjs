export const name="lucid_2-leaf";
export const id="dl_6dab8d5161f54b0bbbd1";
export const url=new URL("../icons/lucid_2-leaf.svg?v=4a1a10e3c212b79c3e18f3ddd35a241747837f8c3170017ac933a12c6894e1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
