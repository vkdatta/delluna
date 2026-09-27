export const name="radioactive-bold";
export const id="dl_b63cbf51ec5c4922af42";
export const url=new URL("../icons/radioactive-bold.svg?v=bcde8864f07bb83dc0e5ea68ce51cfc232e2304bcdeaec83a9102d4d10395fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
