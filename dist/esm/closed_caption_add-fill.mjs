export const name="closed_caption_add-fill";
export const id="dl_8783e54ddea11a5f61b5";
export const url=new URL("../icons/closed_caption_add-fill.svg?v=b94fce1c6d85a8875b3d6d4b8d8ac342f3e6c4d15c3e7cbff466a75af9443f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
