export const name="step";
export const id="dl_8f6c0da877014fa98490";
export const url=new URL("../icons/step.svg?v=a27a833974c885f583f54fa927118bbec6dd3392b84458222b48d1e372920248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
