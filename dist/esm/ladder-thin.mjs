export const name="ladder-thin";
export const id="dl_1238f314a40448008b26";
export const url=new URL("../icons/ladder-thin.svg?v=cf0c4bd8005398326843af46ecbbf749da9854fd85127640d6cd7780594d5032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
