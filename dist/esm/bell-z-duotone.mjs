export const name="bell-z-duotone";
export const id="dl_57c9b58672334fc288a3";
export const url=new URL("../icons/bell-z-duotone.svg?v=58b25263e9cb1442cf255828e225381c7f1cf7bf091c648d1e3dbb927b4cf861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
