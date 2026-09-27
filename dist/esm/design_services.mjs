export const name="design_services";
export const id="dl_3459fe27d0af21774f81";
export const url=new URL("../icons/design_services.svg?v=33389a55e05585d4c2badcbd93df717927d3577ab0e2b3af21beacc497678691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
