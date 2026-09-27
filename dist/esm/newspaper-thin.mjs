export const name="newspaper-thin";
export const id="dl_226f231023a448daa575";
export const url=new URL("../icons/newspaper-thin.svg?v=00d0397dc9089a8d72203ca4b10188e397346ca947a5c7adecfff8c92bb0bcfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
