export const name="phone-outgoing-thin";
export const id="dl_60951c99fd094c269958";
export const url=new URL("../icons/phone-outgoing-thin.svg?v=70395ffe5817be8d48961be1744a24bdf0e16a0c75e08ccdaa156640310ec829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
