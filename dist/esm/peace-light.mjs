export const name="peace-light";
export const id="dl_d60821125f604ab282ee";
export const url=new URL("../icons/peace-light.svg?v=dbbb2596994335f1cb8b87380aa1cbf2eae6d5582e97a5fd18942bd63899690d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
