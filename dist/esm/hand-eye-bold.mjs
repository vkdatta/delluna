export const name="hand-eye-bold";
export const id="dl_40dc456dc16c45de826b";
export const url=new URL("../icons/hand-eye-bold.svg?v=d6e996c76844a2573c878e7469954130cdb5be8bdc69126eac7ce45a220a8eef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
