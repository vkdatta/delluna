export const name="grid-four-light";
export const id="dl_2f6e723d9096475a8800";
export const url=new URL("../icons/grid-four-light.svg?v=73fbd2cae6d5de1d687eb6ea739d36ce0330c9010e9fedaf5a627190f87742fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
