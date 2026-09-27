export const name="file-dashed-thin";
export const id="dl_69175d763e9a46a69945";
export const url=new URL("../icons/file-dashed-thin.svg?v=97f03799af03ca03074b9a1549e9a32ade64563f66b2932bd83f1c6d2fba0bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
