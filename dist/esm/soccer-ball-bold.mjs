export const name="soccer-ball-bold";
export const id="dl_816c4d599c5628b0f880";
export const url=new URL("../icons/soccer-ball-bold.svg?v=103577737f23a682d56dee8371b514e517bb1e15a96d442a6b0c417a9c7fa2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
