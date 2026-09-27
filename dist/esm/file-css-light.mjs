export const name="file-css-light";
export const id="dl_5bbf2a5d8f994f20a98c";
export const url=new URL("../icons/file-css-light.svg?v=9927783f014bda3d813bcaa3f88e4ba5fee520d869edfd134569e80abd7a19a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
