export const name="pill_off-fill";
export const id="dl_90fa79bfaf4941c589f8";
export const url=new URL("../icons/P/pill_off-fill.svg?v=2eb87e5a4f4c74de2ecb96e2e1a247f339616b3ef1d1b19c5365241d87132dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
