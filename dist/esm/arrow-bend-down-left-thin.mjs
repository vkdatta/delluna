export const name="arrow-bend-down-left-thin";
export const id="dl_e2a772375bd04d8092fc";
export const url=new URL("../icons/arrow-bend-down-left-thin.svg?v=0e07185570e053167cfb9575c3f2f79640a4d1d0094936cec5a48aa2fde75ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
