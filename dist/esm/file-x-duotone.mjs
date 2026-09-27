export const name="file-x-duotone";
export const id="dl_b6eb7ef288294f0abf25";
export const url=new URL("../icons/file-x-duotone.svg?v=f8af14b82cc6e6539bfd7a651a9b5608d64365102185c2df996fd5bfa6263f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
