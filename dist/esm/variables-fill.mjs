export const name="variables-fill";
export const id="dl_6e1b0a384e7a47dbbfdb";
export const url=new URL("../icons/V/variables-fill.svg?v=aa94c700ed03dd0ba653194118631c24a1dc1bcbce42ab208de907306d556ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
