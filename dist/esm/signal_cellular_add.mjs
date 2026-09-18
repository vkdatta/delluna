export const name="signal_cellular_add";
export const id="dl_502161377a8f44f19dbe";
export const url=new URL("../icons/S/signal_cellular_add.svg?v=05ac9c1ad4126f82e4b90253e90000b29fffcb64f58628fbe03dc37ad2b43042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
