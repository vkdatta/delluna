export const name="work";
export const id="dl_4bc10d10a800476fbb79";
export const url=new URL("../icons/W/work.svg?v=1a2bc13891f3492cd86fb9d41eccec8570e3677d8f3fae59d6f5294385c93017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
