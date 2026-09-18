export const name="directions_alt_off-fill";
export const id="dl_3352f64d13c74dcea304";
export const url=new URL("../icons/directions_alt_off-fill.svg?v=45f9bf135205cdac722f8bbcf18739d8d7d8b67b22e03a65be8d21356642013b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
