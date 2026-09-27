export const name="union-fill";
export const id="dl_37ec3ac75cc85dce6a0f";
export const url=new URL("../icons/union-fill.svg?v=c8e0a8cd9ac76c895f22841eba65a17b63854aa6d5be339837a4e51eba8b4f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
