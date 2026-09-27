export const name="sell-fill";
export const id="dl_aa3b841a247d8726915c";
export const url=new URL("../icons/sell-fill.svg?v=3f767113a378a13312082f3cb889810f2daeeda47d138ff2fb65cf64df8460f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
