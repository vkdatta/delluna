export const name="emoji_objects-fill";
export const id="dl_4d557f761991cc5c325b";
export const url=new URL("../icons/emoji_objects-fill.svg?v=2efeada5eb7b8d77fb315a246b13608d79a8df3ea855336953a6c11034a1af55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
