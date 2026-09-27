export const name="person-bold";
export const id="dl_1339082097344b35a9a3";
export const url=new URL("../icons/person-bold.svg?v=347f57ef16ece047478a450d2bb4137fed8140f0e575ff41fbca1e7a69819979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
