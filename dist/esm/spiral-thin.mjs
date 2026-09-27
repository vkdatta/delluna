export const name="spiral-thin";
export const id="dl_784e6387870a0cc385ae";
export const url=new URL("../icons/spiral-thin.svg?v=84aefa7643d9ae97218b84b100bb904a87c5cd3efb88b5818876d5c37c48a3b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
