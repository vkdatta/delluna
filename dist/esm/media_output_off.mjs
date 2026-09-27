export const name="media_output_off";
export const id="dl_be83b046897e48d17b55";
export const url=new URL("../icons/media_output_off.svg?v=07994cd0e69d2dd8e30691f938e3dd668ec988e3e389eb54afb688810914920d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
