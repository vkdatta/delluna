export const name="house-line-fill";
export const id="dl_8573691a8e7140979bcd";
export const url=new URL("../icons/house-line-fill.svg?v=7e0fc9ba5e92672beb673ecc6313ae25b73324ea9c1bd4f6b591f80eb1aef321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
