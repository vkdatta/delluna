export const name="meteor";
export const id="dl_3414c942e1ba4042a6e0";
export const url=new URL("../icons/meteor.svg?v=b7107a40b16702776b86808377bdf9c380f33143af7bb8f76d9aa57625d95502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
