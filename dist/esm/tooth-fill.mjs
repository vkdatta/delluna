export const name="tooth-fill";
export const id="dl_4fa28a95f1f4e11afcb9";
export const url=new URL("../icons/tooth-fill.svg?v=66f0dad0ae2b5c158e80db41de3ffe29f1f2324d9127f59dadf1338050e7f642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
