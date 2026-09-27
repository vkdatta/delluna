export const name="vignette-thin";
export const id="dl_d77ee8fe6365b03c654b";
export const url=new URL("../icons/vignette-thin.svg?v=1e932a9946823ae6f5fb7c4305771020d4602759052a7d4cc9cd93705c329f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
