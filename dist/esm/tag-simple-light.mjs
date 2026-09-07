export const name="tag-simple-light";
export const id="dl_c655112818b641beb780";
export const url=new URL("../icons/T/tag-simple-light.svg?v=9ed0b1eff2669236cfbdcd326c98012f98b3f78eeb4a2cb1bcf3d6b0b31249fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
