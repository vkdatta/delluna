export const name="lucid_1-arrow-up-left";
export const id="dl_a1c81d2a7ca54493b25e";
export const url=new URL("../icons/lucid_1-arrow-up-left.svg?v=e76c6163947fdd5aa0a87bd473d10ffcd963b6a0254083807391e4ab89cdb24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
