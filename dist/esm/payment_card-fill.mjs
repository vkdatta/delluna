export const name="payment_card-fill";
export const id="dl_6b49805676c2431aa1b7";
export const url=new URL("../icons/P/payment_card-fill.svg?v=a4c4ec57ac4a9eaccd79f4c44f921ae8961a38764bd97480aea5b3dcf8f73723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
