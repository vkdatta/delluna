export const name="network_wifi_1_bar_locked";
export const id="dl_46ff2bf527c242158988";
export const url=new URL("../icons/N/network_wifi_1_bar_locked.svg?v=d1ca78b2e844cb1cd3eb777c6cf78ad44fc592ef3ee6d4c197d67e168c161122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
