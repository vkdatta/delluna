export const name="linked_services-fill";
export const id="dl_33115913a64bd2efddb6";
export const url=new URL("../icons/linked_services-fill.svg?v=b998cbe8d42607c61ee4cf777233c7daecd30400708cbb471b251ee8bd188537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
