export const name="dots-three-outline-thin";
export const id="dl_9e281b1f9fc741f4aed0";
export const url=new URL("../icons/dots-three-outline-thin.svg?v=369ad260630468b619785229b73ec68c2c28307411625202243e970fb489e8be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
