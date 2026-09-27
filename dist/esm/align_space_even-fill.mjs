export const name="align_space_even-fill";
export const id="dl_e06da42b41368433325b";
export const url=new URL("../icons/align_space_even-fill.svg?v=e0ffb94db12310123763b709d93b49b82069c10fc9a595c6a5853c5b11bca282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
