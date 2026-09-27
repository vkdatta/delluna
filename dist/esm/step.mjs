export const name="step";
export const id="dl_8f6c0da877014fa98490";
export const url=new URL("../icons/step.svg?v=4028ebd9180b718679f7fa49698fadc9e524d692dd2e000f55930cc2fd748fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
