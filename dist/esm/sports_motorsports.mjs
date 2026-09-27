export const name="sports_motorsports";
export const id="dl_c48c4424b0f00669fa3c";
export const url=new URL("../icons/sports_motorsports.svg?v=6a32cf050876276e28b7b293b7d1af1b8489197d091a40c76d56b4ef6fba71a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
