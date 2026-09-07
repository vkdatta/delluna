export const name="pen-nib-straight-thin";
export const id="dl_9ec3a4f524874d9285f4";
export const url=new URL("../icons/pen-nib-straight-thin.svg?v=386f4c0e28064aa029423afeeea637787ee0b319ef41de6f3b418e72b666c9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
