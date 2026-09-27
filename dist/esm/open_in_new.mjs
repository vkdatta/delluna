export const name="open_in_new";
export const id="dl_7d9467c750bad3c6c432";
export const url=new URL("../icons/material_symbols/open_in_new.svg?v=e0c908ebbdd400a0f6e4ab82f36dfd2936da52f858e3f9c95d5f136e0bb7357d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
