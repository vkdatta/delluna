export const name="remove_from_queue-fill";
export const id="dl_acb47dac602bdce3b63c";
export const url=new URL("../icons/remove_from_queue-fill.svg?v=d8cc4ac3905d565aec196410983cf050469ed32726eb34a331293554c05ea0f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
