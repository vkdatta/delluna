export const name="desktop_cloud-fill";
export const id="dl_d78fcf5e32c047040017";
export const url=new URL("../icons/desktop_cloud-fill.svg?v=6f2cb9f0689fffa4ecdd08b825145ac9f831686e265412cbdfd3f0e8d7fb4a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
