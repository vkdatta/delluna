export const name="unite-thin";
export const id="dl_e8d9420c0544b9de55f0";
export const url=new URL("../icons/unite-thin.svg?v=e50d75ea40b687f066be5108360de05b50d04f0c1ef64a317d0ce710bb41a2be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
