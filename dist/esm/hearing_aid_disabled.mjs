export const name="hearing_aid_disabled";
export const id="dl_d096eb9fe5db6c907e92";
export const url=new URL("../icons/hearing_aid_disabled.svg?v=c68ac26e2400461d485068849c29398c0c376304f3c212f88c07699a3a139f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
