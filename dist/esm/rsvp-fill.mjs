export const name="rsvp-fill";
export const id="dl_fec9fe3eea718f68d434";
export const url=new URL("../icons/rsvp-fill.svg?v=269ecc6735e85eda1f9f85deb61e20c9d499abb088f0011bdc9c382d9bea2dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
