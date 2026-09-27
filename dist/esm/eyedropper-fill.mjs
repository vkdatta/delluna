export const name="eyedropper-fill";
export const id="dl_7de63493682e43609a4d";
export const url=new URL("../icons/eyedropper-fill.svg?v=09de2b9d5535578c31a531ad38a586e87579d9dda2dc68645626a9977baa3219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
