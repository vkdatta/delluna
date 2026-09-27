export const name="gender-transgender-duotone";
export const id="dl_4a75d54f9d2149deb573";
export const url=new URL("../icons/gender-transgender-duotone.svg?v=f673d6cdcbf025c555d28be2db6421a7766c8c0831a4894e391468fa2da35f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
