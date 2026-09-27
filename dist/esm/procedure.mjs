export const name="procedure";
export const id="dl_6fc794d1ec5ac2ee2694";
export const url=new URL("../icons/procedure.svg?v=e9f5a8b0691020bca5ac733b89984a0c727dda2dfdb1ce15b3bb77f1a1a8878c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
