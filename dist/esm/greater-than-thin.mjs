export const name="greater-than-thin";
export const id="dl_3ae3dcc3f92a418fb68d";
export const url=new URL("../icons/greater-than-thin.svg?v=fe54e95cedc5cc4610a1c785b622a5bad805b169c5cf736b9aa4f653de1db714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
