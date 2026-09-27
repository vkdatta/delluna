export const name="assignment_return";
export const id="dl_f79b644d072b5f35fcc9";
export const url=new URL("../icons/assignment_return.svg?v=eda9c40919c4d4b9ae98d33fd7d52cf9a7edcec0dcb2c253704b512b5edaf899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
