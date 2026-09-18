export const name="settings_power-fill";
export const id="dl_34585276e15047428c9c";
export const url=new URL("../icons/settings_power-fill.svg?v=62410572513ff888c4796565e04ae4ef3492db19e630bf39f3a3b8f1ad604584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
