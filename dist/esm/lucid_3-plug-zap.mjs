export const name="lucid_3-plug-zap";
export const id="dl_a8531f1aa1ce41f8a44b";
export const url=new URL("../icons/lucid_3-plug-zap.svg?v=5023e795d8bf8492772347ae18500830179d3d88d3b4261279767beea0877f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
