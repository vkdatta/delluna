export const name="percent-fill";
export const id="dl_29008494365f43cebe29";
export const url=new URL("../icons/percent-fill.svg?v=926d0f3fd06e10e316564edcd8b86a99f44d340b663cf3ff66b2e4252fbb134f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
