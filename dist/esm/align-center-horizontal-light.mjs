export const name="align-center-horizontal-light";
export const id="dl_1033c33f1e434927bcdd";
export const url=new URL("../icons/align-center-horizontal-light.svg?v=6aad2a0b18bca98faa7c76dc21d85f4d6e616cab7150430832e794839cdc30be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
