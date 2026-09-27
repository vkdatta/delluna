export const name="assignment_returned";
export const id="dl_6e8a04b4bc6c6772f15e";
export const url=new URL("../icons/assignment_returned.svg?v=38be1c316d29a5cc105143bf1a990d96d98829530acf837c6868520634689946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
