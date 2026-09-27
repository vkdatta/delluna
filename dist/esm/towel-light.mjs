export const name="towel-light";
export const id="dl_f93a3159ecdbc1aa0f51";
export const url=new URL("../icons/towel-light.svg?v=ccac82a6ca9a0d87de61e39853e079b09fbd1a2d123c592f1e114df0a2335707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
