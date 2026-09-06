export const name="greater-than";
export const id="dl_f94dceaecbd446ff92dd";
export const url=new URL("../icons/greater-than.svg?v=595e1f13ad0f86352dd4731aec11bffb977bc85f7d087df70356d9d935f7dfd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
