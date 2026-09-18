export const name="notifications";
export const id="dl_34b22c31491b4f19ba61";
export const url=new URL("../icons/notifications.svg?v=a12ebe5adc2eb166599ffc0babd71207eebd9403b61ad902fe6a6bfc697e3990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
