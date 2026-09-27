export const name="lamp-pendant-light";
export const id="dl_4b839dda48d540869a70";
export const url=new URL("../icons/lamp-pendant-light.svg?v=14757342063c7813918f6a882b14410adfe1d85f0c6eca87a6a8e756eb479f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
