export const name="mobile_charge-fill";
export const id="dl_0330ab47dde5f9aa0025";
export const url=new URL("../icons/mobile_charge-fill.svg?v=63bad4407d9667ba79a3c73d7282fb8925403457591c3aa78bbb9d3c4e682956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
