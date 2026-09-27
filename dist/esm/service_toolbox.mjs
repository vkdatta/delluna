export const name="service_toolbox";
export const id="dl_92ce20c0a375ec8f41b0";
export const url=new URL("../icons/service_toolbox.svg?v=aa6c176a140720b67ee805a1f256cec50c2ebf69259c5d0a16eccee29b431c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
