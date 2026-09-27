export const name="priority-fill";
export const id="dl_f08c8f3cd1e0f8ff3591";
export const url=new URL("../icons/priority-fill.svg?v=c74ce6d938a65419db78b24b5e3bda4f770178dd505481c01ddb747cab55675f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
