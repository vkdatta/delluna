export const name="mouse-left-click-thin";
export const id="dl_edafe8cd746b41558644";
export const url=new URL("../icons/mouse-left-click-thin.svg?v=8f9914d04c3f3815b3330c4d880fe32815a496a68887f129ec8b46f0f5573504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
