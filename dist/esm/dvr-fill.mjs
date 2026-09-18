export const name="dvr-fill";
export const id="dl_5bedc582cecb4abc90fa";
export const url=new URL("../icons/dvr-fill.svg?v=fe1461c2b13ddfb5025d5fa26ca092def92297474a8e02976a04263bf1bedbe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
