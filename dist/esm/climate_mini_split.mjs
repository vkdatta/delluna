export const name="climate_mini_split";
export const id="dl_183ef455edc693a0a492";
export const url=new URL("../icons/climate_mini_split.svg?v=b179034fe23bdfa1f2a555eb10f0befa5f0cd83fc910e55c1addbebe0503e883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
