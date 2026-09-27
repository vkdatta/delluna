export const name="lucid_3-nut";
export const id="dl_15afbf7964894214a0f0";
export const url=new URL("../icons/lucid_3-nut.svg?v=8aaaf7b0e1d9e3f19b1686acd6c20419c9120c0415953346e8d0980acd65b625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
