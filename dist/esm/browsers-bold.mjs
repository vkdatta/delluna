export const name="browsers-bold";
export const id="dl_e3d59ffb033c43b38501";
export const url=new URL("../icons/browsers-bold.svg?v=732608fc6a99d6c351545e5231ddf35536e926200c59bbbc14f83fc697857bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
