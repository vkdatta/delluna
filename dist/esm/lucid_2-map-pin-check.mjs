export const name="lucid_2-map-pin-check";
export const id="dl_440ebe6c8db04fa5bb56";
export const url=new URL("../icons/lucid_2-map-pin-check.svg?v=d326200eb2ecb695962395519b493f42cd26ddd5bed5db70417188f57932f8d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
