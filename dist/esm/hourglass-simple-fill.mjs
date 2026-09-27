export const name="hourglass-simple-fill";
export const id="dl_a13a911f97dc47aba9f0";
export const url=new URL("../icons/hourglass-simple-fill.svg?v=d51b810822c212c279ddca54a226f7e95333b7252495da92abe84a5a519272e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
