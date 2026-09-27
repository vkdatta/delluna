export const name="elevator";
export const id="dl_338a89cec27a3572beda";
export const url=new URL("../icons/elevator.svg?v=3db9961303f6698abd06b1bc467558469a3b1ce994d0d61fe8975b7b142512a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
