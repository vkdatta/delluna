export const name="broken_image-fill";
export const id="dl_5b6bafcc0a534e5298c4";
export const url=new URL("../icons/B/broken_image-fill.svg?v=3179a06ee6ab44c3474123b480f9e346129a7ca3033d1fb74f3b0ec62480c53d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
