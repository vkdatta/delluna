export const name="binoculars-fill";
export const id="dl_c53be58c266943ff94e1";
export const url=new URL("../icons/binoculars-fill.svg?v=e0fd7f5f375c8dabf0bdf83442737a615ee77d9334559ded6b73c38405b0f24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
