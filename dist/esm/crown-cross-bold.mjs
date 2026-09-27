export const name="crown-cross-bold";
export const id="dl_d0bb581bbf30449485e5";
export const url=new URL("../icons/crown-cross-bold.svg?v=fb0981e415b193a224c88ddd4f73ef97ea708c2b2e29cc1b883c2804ef6b7844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
