export const name="moped-front-light";
export const id="dl_ce66b4a736e645959760";
export const url=new URL("../icons/moped-front-light.svg?v=adf73612451570ec780ba87a627b2f2d98303c7ca49ea90d99809b260cbe7796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
