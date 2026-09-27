export const name="remote_gen-fill";
export const id="dl_13dea35facf4113056c6";
export const url=new URL("../icons/remote_gen-fill.svg?v=fa3560929261eb4a83351fd09132d11e06d4534d16d0cc0bb90215cc2adc2996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
