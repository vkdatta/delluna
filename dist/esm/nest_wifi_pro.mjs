export const name="nest_wifi_pro";
export const id="dl_b968f83254d8b11486c1";
export const url=new URL("../icons/nest_wifi_pro.svg?v=86031c87e67339abd6504b7356cbaf021d9411c06a8ccd64aab6af4bf49fc67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
