export const name="hearing_aid_disabled-fill";
export const id="dl_c26d54a9a219cb8380c7";
export const url=new URL("../icons/hearing_aid_disabled-fill.svg?v=2e9a09dd5e22aeb21d0de32669c451b61bc9a4a428769eeba7249db8fecf247f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
