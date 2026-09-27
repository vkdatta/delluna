export const name="lucid_3-phone-outgoing";
export const id="dl_d8502541c20f4129ae13";
export const url=new URL("../icons/lucid_3-phone-outgoing.svg?v=d8b641c0c459bd060a1db67bca2dbc5128a4c6d821fb91d0ca7d2fdf634da120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
