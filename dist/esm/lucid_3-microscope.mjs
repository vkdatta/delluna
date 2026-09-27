export const name="lucid_3-microscope";
export const id="dl_da3630069d3643cf9b07";
export const url=new URL("../icons/lucid_3-microscope.svg?v=f67fe1689e6d3ddae874158c510307e2be7f17afa9ba9dc95fb3395eb75986e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
