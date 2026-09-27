export const name="devices_off-fill";
export const id="dl_ed764e7ac99c9da21fc4";
export const url=new URL("../icons/devices_off-fill.svg?v=12f1f69db0ed17d7a4db7f2936b0fdbd372b2ed2b5bc3c319fe77599383d1412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
