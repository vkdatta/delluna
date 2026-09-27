export const name="newspaper-clipping-bold";
export const id="dl_91db09d9189d42168c2e";
export const url=new URL("../icons/newspaper-clipping-bold.svg?v=dd8156e72ca4f61932cec90ce26eddb401bfbb58bed3b6e8e569d20278739cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
