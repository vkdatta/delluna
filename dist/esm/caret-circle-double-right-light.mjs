export const name="caret-circle-double-right-light";
export const id="dl_b26a36e571b849649088";
export const url=new URL("../icons/caret-circle-double-right-light.svg?v=5d044c064bf7416c31526b6e7a94a105f18426d80eb7c392e118fb8c94e067f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
