export const name="goggles-thin";
export const id="dl_10bf1ef868e54aec8923";
export const url=new URL("../icons/goggles-thin.svg?v=f80fc794f02f6887e8a8a915b85cff2eb3461f8b1ccfe48492286cb362f81842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
