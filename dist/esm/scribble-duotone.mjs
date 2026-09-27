export const name="scribble-duotone";
export const id="dl_d0d09d86c1ee90d402d4";
export const url=new URL("../icons/scribble-duotone.svg?v=2a8d6323ace705313fa48b53c41865e157824a5b429e21177a5819cd2c6ea265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
