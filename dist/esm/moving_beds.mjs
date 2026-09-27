export const name="moving_beds";
export const id="dl_00074bc0b5f0d94d3d94";
export const url=new URL("../icons/moving_beds.svg?v=3df072e243336c7f3d65ea216c820debf62e8fcd2aaea52bf8b1ed407e91f366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
