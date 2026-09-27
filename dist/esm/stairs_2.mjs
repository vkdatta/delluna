export const name="stairs_2";
export const id="dl_9808c04d4d562a7470ab";
export const url=new URL("../icons/stairs_2.svg?v=68dd538434b89a45763611306abfde209d0cc573014a984fb4be32425a1c8669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
