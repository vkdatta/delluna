export const name="wifi_find-fill";
export const id="dl_ee78281542d872b5ccf7";
export const url=new URL("../icons/wifi_find-fill.svg?v=0286132d38a5be8fcdf264a347fae49f4154daa07110b9c4451957cdd1feed99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
