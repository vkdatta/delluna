export const name="humidity_mid-fill";
export const id="dl_c0555edc38e143058e65";
export const url=new URL("../icons/humidity_mid-fill.svg?v=174809438f915b53123fca0d2a6e8e70ce67b04704c2c136cf952948efc05b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
