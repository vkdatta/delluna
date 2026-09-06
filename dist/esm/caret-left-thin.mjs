export const name="caret-left-thin";
export const id="dl_611b9537f1454c1b941a";
export const url=new URL("../icons/caret-left-thin.svg?v=c50e48818069516396414775b1161c7c154df2f11c43e543c17acf2751b2c6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
