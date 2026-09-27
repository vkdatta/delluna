export const name="tablet_mac";
export const id="dl_3ca2c5c79766f282eaff";
export const url=new URL("../icons/tablet_mac.svg?v=47e61433c0d2167e7dd62d359fec2f5382ab877ed627a802a46d232528e7eb50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
