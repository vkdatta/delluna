export const name="release_alert-fill";
export const id="dl_fe22f42802904f63ad8a";
export const url=new URL("../icons/release_alert-fill.svg?v=75f7daeb6955c5bbd1ce645447a5ac23990443b8f8be8cca928807c93adfd0c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
