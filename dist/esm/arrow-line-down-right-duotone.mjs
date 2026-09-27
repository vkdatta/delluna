export const name="arrow-line-down-right-duotone";
export const id="dl_8bf5d72b4a654b92b9a1";
export const url=new URL("../icons/arrow-line-down-right-duotone.svg?v=8cdbc40aa3cac320b7dd319f273478ee0caa04b3e97bf7dbe7b9886b77f44304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
