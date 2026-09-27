export const name="mountain_flag";
export const id="dl_5816e1c2f73323419617";
export const url=new URL("../icons/mountain_flag.svg?v=17ce44a70ebba8b67aea12aa3e9844433d55af5f5466b1bd9f30a67f53b982c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
