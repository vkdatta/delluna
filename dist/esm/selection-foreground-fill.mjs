export const name="selection-foreground-fill";
export const id="dl_aa731ef28daf4985afc1";
export const url=new URL("../icons/S/selection-foreground-fill.svg?v=22f593233bd2791db8714e62b58e4c090609104b39d7b14f6c03f6e430922f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
