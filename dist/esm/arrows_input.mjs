export const name="arrows_input";
export const id="dl_113fb88f329fe43430a6";
export const url=new URL("../icons/arrows_input.svg?v=0c6be7ca0d59f9c92a7eaa2a40cff165782e8ab367654e718cb8ce392c87c7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
