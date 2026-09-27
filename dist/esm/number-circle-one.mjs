export const name="number-circle-one";
export const id="dl_d2d40c3c5af64b1a960d";
export const url=new URL("../icons/number-circle-one.svg?v=9cbd4bee4ff596b9fee4a2a5a43927c16158ef92341c01c0ba35fb4430266f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
