export const name="highlighter-circle-duotone";
export const id="dl_f17af43e403440e98283";
export const url=new URL("../icons/highlighter-circle-duotone.svg?v=3726de4c7604505aa5bafe239c6c0f24594c5c508a3301fd72309696f43877a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
