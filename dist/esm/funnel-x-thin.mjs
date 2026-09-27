export const name="funnel-x-thin";
export const id="dl_086a514135644ce6b5a0";
export const url=new URL("../icons/funnel-x-thin.svg?v=4b943bc6d1450f036ec3d22d76a690e0c6b3071da47273d62959811c13c393d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
