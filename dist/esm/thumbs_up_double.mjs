export const name="thumbs_up_double";
export const id="dl_0d5ce44c33178cfcce3d";
export const url=new URL("../icons/thumbs_up_double.svg?v=e29f569125ddd085b6cbff16bf8a8695411744deadb5989cb792c887f6409f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
