export const name="jamboard_kiosk-fill";
export const id="dl_c625c03d841aabe4edd2";
export const url=new URL("../icons/jamboard_kiosk-fill.svg?v=2903deaf357710cd44f062be9b7ef5dcb280ad9354aeaaed3b0017a407980aee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
