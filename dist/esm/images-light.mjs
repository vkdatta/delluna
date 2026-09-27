export const name="images-light";
export const id="dl_b94bb401499a46b5a5dd";
export const url=new URL("../icons/images-light.svg?v=a84cbb6bfa43ab470652fd50e299f7ce979fa9465ead1cfbe47502917c023920",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
