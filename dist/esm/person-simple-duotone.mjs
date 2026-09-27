export const name="person-simple-duotone";
export const id="dl_d3e2a626fd6347aaa319";
export const url=new URL("../icons/person-simple-duotone.svg?v=2fb7e69544246e617e99097e3d61e2337e5aa5f9775b5ae3b5a4bc97d797bab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
