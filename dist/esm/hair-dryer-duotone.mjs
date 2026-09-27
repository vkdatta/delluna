export const name="hair-dryer-duotone";
export const id="dl_2ef98bf6266d4202982e";
export const url=new URL("../icons/hair-dryer-duotone.svg?v=9f8af9641b8859e772376bfb50239f9a02a29a403284d090f6e7dd9eecb4a877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
