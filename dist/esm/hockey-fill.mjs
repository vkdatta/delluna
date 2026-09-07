export const name="hockey-fill";
export const id="dl_c327420352a440e7ae89";
export const url=new URL("../icons/hockey-fill.svg?v=2c890465114b6f21832f78a5fd4f6aed59a168e3a164b15ceaac21a1b6a6590b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
