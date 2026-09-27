export const name="humerus_alt";
export const id="dl_61f2c1ec2c4f2fed63a3";
export const url=new URL("../icons/humerus_alt.svg?v=3ffae80b4b31b66e4f01002e4466e4031eed67b806b9b188b63fba541da9ccaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
