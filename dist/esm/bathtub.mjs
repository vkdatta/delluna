export const name="bathtub";
export const id="dl_e8c8f13bb6434658b9b9";
export const url=new URL("../icons/bathtub.svg?v=091f5128764ba08ed6cbe9da0026a4dc78b151e45b114215b762a8796f634457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
