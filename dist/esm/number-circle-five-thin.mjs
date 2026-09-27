export const name="number-circle-five-thin";
export const id="dl_476c2ce481464fd5b63e";
export const url=new URL("../icons/number-circle-five-thin.svg?v=96d14b97a5b0e808790b015258ff4f3f4e8ebffaef91cfd73399de0becd4937e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
