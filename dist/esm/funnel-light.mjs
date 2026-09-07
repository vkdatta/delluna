export const name="funnel-light";
export const id="dl_a5a2d587972e4902a198";
export const url=new URL("../icons/funnel-light.svg?v=5b496dae4149c8b396b9543e8a79e1f964001f0614ccbf63d8574c380e934683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
