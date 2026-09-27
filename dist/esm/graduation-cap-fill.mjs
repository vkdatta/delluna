export const name="graduation-cap-fill";
export const id="dl_7db4d5a99fc540e5afbf";
export const url=new URL("../icons/graduation-cap-fill.svg?v=c3a0c6b93ada174f5913a0bb01baf6b1056bbf0d04f96c1dd3208047b72500c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
