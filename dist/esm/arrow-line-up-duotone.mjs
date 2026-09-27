export const name="arrow-line-up-duotone";
export const id="dl_ae237a90555e42fb846c";
export const url=new URL("../icons/arrow-line-up-duotone.svg?v=572ef003cf8bac051b48c838b9d9d60de88b48d280cae238c914e1d354b5f382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
