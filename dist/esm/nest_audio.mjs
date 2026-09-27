export const name="nest_audio";
export const id="dl_33ed727e8b6c425ce4ba";
export const url=new URL("../icons/nest_audio.svg?v=c806fb9159479850350385aa3d3706cd496ac75752daed68db290571c6ade528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
