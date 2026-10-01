export const name="other_houses";
export const id="dl_22193747d28d681ea447";
export const url=new URL("../icons/other_houses.svg?v=24a96581a601bc65b18b3ada81aa3a5e3932afcd15b1cda8680b01e29c607d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
