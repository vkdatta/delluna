export const name="wifi_off";
export const id="dl_db66823306b6819a70c5";
export const url=new URL("../icons/wifi_off.svg?v=cf1a9bb47cc587eb2f22b4ef109ebca02bcf7e5fc4ea1f9466cf81eb4fa31279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
