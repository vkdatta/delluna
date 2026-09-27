export const name="dialer_sip-fill";
export const id="dl_c82becfd79458e0e203b";
export const url=new URL("../icons/dialer_sip-fill.svg?v=17e6fbf68b6b2aaf37b94ab1c462b43a0c771947dce7ca2e1c238b48f8881881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
