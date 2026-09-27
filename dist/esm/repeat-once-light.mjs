export const name="repeat-once-light";
export const id="dl_0c824a84638c4d11b0ab";
export const url=new URL("../icons/repeat-once-light.svg?v=b85b7091274414657f9c27f3c431200ce3a27ef1f10d1d71cb1e40c2fc9d2a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
