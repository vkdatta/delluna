export const name="arrow-elbow-left-up-light";
export const id="dl_47ac53e34df0497eb3fe";
export const url=new URL("../icons/arrow-elbow-left-up-light.svg?v=ec7b4fc98bdc3051304bffe09c15deca5a26cdfddb8d8a1779538898237edfbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
