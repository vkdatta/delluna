export const name="rectangle-light";
export const id="dl_54e8dbfbb9ae486c8be2";
export const url=new URL("../icons/rectangle-light.svg?v=84c03d2f29239064a34447379335e24c2408aa3f76977de398b080b6df3f715e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
