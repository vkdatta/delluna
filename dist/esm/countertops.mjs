export const name="countertops";
export const id="dl_8b1c0985af656aa38315";
export const url=new URL("../icons/countertops.svg?v=a06d6a8f83207265db1a4044b66e8e2461230fbedc65d9ebb5789d83789ed25d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
