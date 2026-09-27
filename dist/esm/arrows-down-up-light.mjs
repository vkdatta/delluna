export const name="arrows-down-up-light";
export const id="dl_d5c7a0141fa44b44949c";
export const url=new URL("../icons/arrows-down-up-light.svg?v=1a20ce2286ab3914ca1cb6ef47831a438105f6d8c1abad41121fb350a435c088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
