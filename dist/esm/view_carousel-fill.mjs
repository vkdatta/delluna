export const name="view_carousel-fill";
export const id="dl_286418918dc3ece0ffac";
export const url=new URL("../icons/view_carousel-fill.svg?v=c00be36643018a7a067efac858191705b17cf8a1c6272a2c54270f0fae5ee31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
