export const name="filter_blocks";
export const id="dl_2f0ec38fbbe6d1789b11";
export const url=new URL("../icons/filter_blocks.svg?v=324a9154ccc0dda469fdc6bfb5caa0b9ec22ea35f5737f90ff2bbb944952b0b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
