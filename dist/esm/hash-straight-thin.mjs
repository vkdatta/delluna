export const name="hash-straight-thin";
export const id="dl_bfb5324fec7046eca826";
export const url=new URL("../icons/hash-straight-thin.svg?v=ead81fa5ba7874e93dfccbdb45d9241aefe3d09548e11766361063c5e2d969c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
