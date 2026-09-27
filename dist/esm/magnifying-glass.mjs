export const name="magnifying-glass";
export const id="dl_35b412a8f8754cf59680";
export const url=new URL("../icons/magnifying-glass.svg?v=de6d65dd2c01564188939ccf24d35f9f436e068fc21f5513a25c5549b9ade4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
