export const name="mobile_off-fill";
export const id="dl_2ae0873f980a2ae5a499";
export const url=new URL("../icons/mobile_off-fill.svg?v=042b0d4afc315a636b90238a3b9e3c0eefbd6af94cbb9a7d430ffa5d1ac8cecf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
