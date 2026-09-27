export const name="bluetooth_searching";
export const id="dl_c323102af9658ea4e42d";
export const url=new URL("../icons/bluetooth_searching.svg?v=56c09731cd7f1a756380eca9aa41c25717feffcf87715389d42333706daa0879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
