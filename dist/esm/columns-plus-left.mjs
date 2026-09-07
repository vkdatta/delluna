export const name="columns-plus-left";
export const id="dl_0685f1a9cfa54e63a068";
export const url=new URL("../icons/columns-plus-left.svg?v=f219df4edcfc27e71eab34acde7df872ab4e5622167a36e71628ef6a2f5a742d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
