export const name="balloon-fill";
export const id="dl_5b115e103a33491e8d5e";
export const url=new URL("../icons/balloon-fill.svg?v=42db2f2bb24a6b2fce9f12e9c7d097c247b3fd0df37cbc8fcc6db040af0e6fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
