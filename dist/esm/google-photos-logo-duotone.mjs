export const name="google-photos-logo-duotone";
export const id="dl_aabd62937eb64687b913";
export const url=new URL("../icons/google-photos-logo-duotone.svg?v=16d1957316364fa28856900e0c4b4ac6fb139c6a6643fec3b1d053382de8e540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
