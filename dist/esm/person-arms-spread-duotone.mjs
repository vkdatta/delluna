export const name="person-arms-spread-duotone";
export const id="dl_d1bc2c77dfde4f9ebdd6";
export const url=new URL("../icons/person-arms-spread-duotone.svg?v=17c866ca70db26cbf10572f9ac4d37ba68b88537cbe372fca9f9b3829ff2283a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
