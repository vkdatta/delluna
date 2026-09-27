export const name="person_cancel";
export const id="dl_54adc1b28bf83a191f8c";
export const url=new URL("../icons/person_cancel.svg?v=6e9c906b8427573eeeb8e08c8a553e930cafb71a8287620ee902208f5b6e346c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
