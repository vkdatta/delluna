export const name="shield-plus-thin";
export const id="dl_064652f9e5b0b6b3dc88";
export const url=new URL("../icons/shield-plus-thin.svg?v=39e7c502eee030b3c2e7efb80831022475e2d7553c6a7005b584c759d01aac9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
