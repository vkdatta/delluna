export const name="speaker-simple-low-light";
export const id="dl_5a81401128c511cfaa5f";
export const url=new URL("../icons/speaker-simple-low-light.svg?v=59ec69af701c07b3e10644ee3c4bd9bb5a4801c2cbe9f908706448f138c97406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
