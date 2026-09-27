export const name="component_exchange";
export const id="dl_82788495901d5d52c6c9";
export const url=new URL("../icons/component_exchange.svg?v=4264f65bf8309fb1b2cf79a506a0bf65ec8ce98f8c554046b0687f534b0d98a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
