export const name="tickets-plane";
export const id="dl_f9d991da56db4ae2b4e1";
export const url=new URL("../icons/tickets-plane.svg?v=18bb7d33e556e26b2395482d1c2724dbd0d4a6a3b509801f5d00b252e295ca67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
