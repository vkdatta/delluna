export const name="roofing";
export const id="dl_0115f014db404fd55694";
export const url=new URL("../icons/roofing.svg?v=05b451d8c76082c46417b6b4a78ddfacc247c19af4d131e7b6a7bdafecec6fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
