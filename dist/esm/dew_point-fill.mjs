export const name="dew_point-fill";
export const id="dl_50c4e3a19fbb49a2acd9";
export const url=new URL("../icons/D/dew_point-fill.svg?v=40237c1fb92fe0b07000d9d0d90d1ff97c3771cac18f33af48a3e7f90a44606f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
