export const name="mobile_hand_off-fill";
export const id="dl_3acdeba06fb24db1b9dc";
export const url=new URL("../icons/mobile_hand_off-fill.svg?v=b08417630e7f74ae33aeba9f847fa8c20a5ceb484ae5adb67928e746ad94800e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
