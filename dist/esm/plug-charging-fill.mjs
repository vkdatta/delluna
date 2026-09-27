export const name="plug-charging-fill";
export const id="dl_8e0f362297854018a6e1";
export const url=new URL("../icons/plug-charging-fill.svg?v=54592335c587277353220306b85359b6995da3c78a306e8f6105e08d03227632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
