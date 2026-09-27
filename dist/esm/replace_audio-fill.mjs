export const name="replace_audio-fill";
export const id="dl_0bcb80f0ffcd96482bbe";
export const url=new URL("../icons/replace_audio-fill.svg?v=9e5e2d12b8f8cd91cc4b721070d2e824699216dbb596683e6c5fc6eceaf65cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
