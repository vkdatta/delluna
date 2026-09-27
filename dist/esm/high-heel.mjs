export const name="high-heel";
export const id="dl_98f9bbc7f5414283b56b";
export const url=new URL("../icons/high-heel.svg?v=e591df722709af37dea93ddcd9b1d03574241586a6cb03aed67c95e89c3ad2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
