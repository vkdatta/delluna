export const name="trophy-duotone";
export const id="dl_ef4f6c9183d95fa5b029";
export const url=new URL("../icons/trophy-duotone.svg?v=d3ff75c7158bc91476494bc09a08c1c7080bb42e2c8f75edda75aaacf3774669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
