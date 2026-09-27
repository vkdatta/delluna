export const name="baby-carriage-fill";
export const id="dl_308ea353f5334922a648";
export const url=new URL("../icons/baby-carriage-fill.svg?v=1188da3553f51f58a93edc5face0986baabbdf645e868584c99c98afa4627605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
