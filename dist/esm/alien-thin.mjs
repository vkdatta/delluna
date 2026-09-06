export const name="alien-thin";
export const id="dl_bf700c492c0145769291";
export const url=new URL("../icons/alien-thin.svg?v=bd66b8a66b785ef6698073138c790695c6b1d7f47bbcdbdf1ed246a404852917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
