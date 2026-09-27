export const name="baseball-helmet-light";
export const id="dl_6d34bd38a092452d8cfa";
export const url=new URL("../icons/baseball-helmet-light.svg?v=7d346f57aa4478151b6bb63aed70e0f801274aafff365a11f837cdf63eecf151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
