export const name="box-arrow-up";
export const id="dl_7402ff185f4841f980e7";
export const url=new URL("../icons/box-arrow-up.svg?v=ddc32531b9de2a6581fd79a8b279bc198714dacb5f85052c0ed99e8d8d9d41cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
