export const name="whatsapp-logo";
export const id="dl_72c687a5fcb44bc184e6";
export const url=new URL("../icons/W/whatsapp-logo.svg?v=37474af9246a13b9b9fbf36561081d02c876db27682c1ac7ce8c2418c2a20320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
