export const name="crosshair-light";
export const id="dl_6e32d35d5efb4d1f972a";
export const url=new URL("../icons/crosshair-light.svg?v=60ff59525d4a05490229acf73951d9b783344f9ef6d9bdcb0850fda7372d9261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
