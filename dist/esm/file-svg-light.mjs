export const name="file-svg-light";
export const id="dl_b29d734e1bc14f2a82e0";
export const url=new URL("../icons/file-svg-light.svg?v=bbcc48cea192f786579fd6338a945a3db303f62ae87ba5dad674faf476fa056f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
