export const name="lucid_2-locate-fixed";
export const id="dl_e7a6afbc6e4f4918a3a2";
export const url=new URL("../icons/lucid_2-locate-fixed.svg?v=ef3d6c08935a5b8f8999e5c2278137cbe7356e569961da4445f0ed4d83667940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
