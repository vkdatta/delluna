export const name="swipe_left-fill";
export const id="dl_d836c978cc6c05fe112f";
export const url=new URL("../icons/swipe_left-fill.svg?v=845b97060179ba20dc2bffc447948854744aa28553136b81affb50d624c23fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
