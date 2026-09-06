export const name="engine-duotone";
export const id="dl_4d3729705c5940cdaad5";
export const url=new URL("../icons/engine-duotone.svg?v=3a9b326c67ebc0121d4228df0149723bbbcb0f425886a7257c8512a9aaeba443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
