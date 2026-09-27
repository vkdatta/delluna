export const name="greater-than-bold";
export const id="dl_86ad73b67a22459baf0c";
export const url=new URL("../icons/greater-than-bold.svg?v=ac910a90533b933309f2330f44bd4e08f863839a6e0f9484390ab1a76d6308d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
