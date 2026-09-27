export const name="subscriptions";
export const id="dl_2a66ac6c0c8137b71052";
export const url=new URL("../icons/subscriptions.svg?v=bc03b56423ca4842380e72cc8adcc71afc86c87c32473277971734e1da473bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
