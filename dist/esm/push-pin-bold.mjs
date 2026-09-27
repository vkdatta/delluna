export const name="push-pin-bold";
export const id="dl_9b17b604f7554c70b7c8";
export const url=new URL("../icons/push-pin-bold.svg?v=bef532249ed82623e1858ceb973a051812a1b832ef0806fb125762924f93e1d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
