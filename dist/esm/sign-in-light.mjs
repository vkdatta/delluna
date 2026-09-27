export const name="sign-in-light";
export const id="dl_02f2a2714888b28266a0";
export const url=new URL("../icons/sign-in-light.svg?v=7f513ac11d3540f1787904554c597cd26be5c1548f53ec6ac8826058e8abc5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
