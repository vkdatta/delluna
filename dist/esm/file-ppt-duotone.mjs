export const name="file-ppt-duotone";
export const id="dl_ad21276e08c14bd7a92a";
export const url=new URL("../icons/file-ppt-duotone.svg?v=0203b002c874b22ddfb4fe2c40fe0537d5194a5f30e1c5ae518958faa0fa3340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
