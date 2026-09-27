export const name="sports_esports";
export const id="dl_c06b4fd3c53b85f271b1";
export const url=new URL("../icons/sports_esports.svg?v=8ddf409d3856eaabbd380dc49035141613aad1034ee8b4a7751048aaf994f6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
