export const name="lucid_1-alarm-clock-plus";
export const id="dl_82431a13d5b64b91b2d3";
export const url=new URL("../icons/lucid_1-alarm-clock-plus.svg?v=c69c2b446e87c9c36ebf7041c616a8b0384402883f7ea5b8e467617517b4a450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
