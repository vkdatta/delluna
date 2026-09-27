export const name="archive-fill";
export const id="dl_9fb8e48b72ff42a79d10";
export const url=new URL("../icons/archive-fill.svg?v=7a3d956d2eae871566ddd412010c8b24dae074bca3fd4d21c33b7015c25c0ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
