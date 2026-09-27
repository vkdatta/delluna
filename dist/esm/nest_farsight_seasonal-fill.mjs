export const name="nest_farsight_seasonal-fill";
export const id="dl_10c8a73d09b9c5fc3186";
export const url=new URL("../icons/nest_farsight_seasonal-fill.svg?v=47d232dde01fc776194fa448210656dbd04ed69622a02cd275d2f5110f8730db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
