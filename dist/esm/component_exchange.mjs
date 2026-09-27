export const name="component_exchange";
export const id="dl_99235337f06ccdb7b76f";
export const url=new URL("../icons/component_exchange.svg?v=8e004f7f91441c0820028bc5a7c3e8772e66e59f1bc9ac6b696a68f78af4dc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
