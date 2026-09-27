export const name="float_landscape_2-fill";
export const id="dl_e2c4a7ff899bb517d5e4";
export const url=new URL("../icons/float_landscape_2-fill.svg?v=c683e5fcc91307a8ca7fb461a06914c49be3aa43df946823a6e84b0cb2eedcd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
