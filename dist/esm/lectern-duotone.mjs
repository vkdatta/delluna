export const name="lectern-duotone";
export const id="dl_d38e95756e144056a865";
export const url=new URL("../icons/lectern-duotone.svg?v=1f4e0603428318f79caff66818a96563391fa790e616e50e3c3259e08a058a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
