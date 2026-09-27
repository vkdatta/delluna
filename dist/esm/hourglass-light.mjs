export const name="hourglass-light";
export const id="dl_8141f45d88a840d3ad5a";
export const url=new URL("../icons/hourglass-light.svg?v=0252d8255b58805559e1777bebd0f7ad521e02e3e4e54aec9cf61e0e6d3f1652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
