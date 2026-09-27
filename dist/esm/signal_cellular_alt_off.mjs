export const name="signal_cellular_alt_off";
export const id="dl_fef36ed422e8e43b2c4d";
export const url=new URL("../icons/signal_cellular_alt_off.svg?v=2d9f34e63e91e8db322910c298d23901157aecb2f924dbcb1fb995c42fd2eb62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
