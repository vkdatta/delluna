export const name="shield-chevron-fill";
export const id="dl_ef6d3c454a7806bfd8bd";
export const url=new URL("../icons/shield-chevron-fill.svg?v=974968fee8246be8796c5583d60fd814dca724b8e94f91a7cb70c21bb68b8277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
