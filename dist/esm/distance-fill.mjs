export const name="distance-fill";
export const id="dl_dc221017319360cbb699";
export const url=new URL("../icons/distance-fill.svg?v=6e96386ccdca19dcf08db5795071e1d7bb2de20839be101878d71ea0e64c3db5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
