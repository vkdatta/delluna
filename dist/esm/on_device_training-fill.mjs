export const name="on_device_training-fill";
export const id="dl_1d325849f78749d5938f";
export const url=new URL("../icons/on_device_training-fill.svg?v=aaa0a326f319c4dc5e7da0040a324b37f5084b7c7b44116fb02e20f5c05e8e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
