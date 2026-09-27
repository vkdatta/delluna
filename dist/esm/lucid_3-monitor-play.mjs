export const name="lucid_3-monitor-play";
export const id="dl_ec30c1005e9f44779631";
export const url=new URL("../icons/lucid_3-monitor-play.svg?v=ea4869e5933abcaabba2d2b6bc83c6bdf06f0a3838935b0631269e93bb360a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
