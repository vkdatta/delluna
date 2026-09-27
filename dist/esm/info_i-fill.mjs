export const name="info_i-fill";
export const id="dl_495c9df93a82bec0a31f";
export const url=new URL("../icons/info_i-fill.svg?v=ad8c8e13f954d5e3729ce8de715e4a9e65e1681985bbbdf62f79764fab39627b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
