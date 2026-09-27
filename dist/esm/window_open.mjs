export const name="window_open";
export const id="dl_8f5f5a2ad8dade44a064";
export const url=new URL("../icons/window_open.svg?v=4756d3a16708deed0589060deef9213dbfcdf67f00387f7b2e20965bc00a4cf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
