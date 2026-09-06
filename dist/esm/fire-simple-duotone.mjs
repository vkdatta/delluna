export const name="fire-simple-duotone";
export const id="dl_6c7f99a3c30846c9a0f3";
export const url=new URL("../icons/fire-simple-duotone.svg?v=8128654ef13a4dea15db684734e2a092aec14fea0d2652f34b6d650ff035fabd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
