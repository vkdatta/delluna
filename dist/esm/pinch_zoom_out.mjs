export const name="pinch_zoom_out";
export const id="dl_1b6525c718d82ce9ae76";
export const url=new URL("../icons/pinch_zoom_out.svg?v=619df60796845ba65e5526f5a099fb2947c92957d9b1376d5313ea547f0d128a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
