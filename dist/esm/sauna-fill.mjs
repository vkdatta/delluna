export const name="sauna-fill";
export const id="dl_c7b692a643d9399a1eba";
export const url=new URL("../icons/sauna-fill.svg?v=765e123a0698b2515fdccc538c174c11c7ec8f75738c4ef93fd88fc9e8cb3a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
