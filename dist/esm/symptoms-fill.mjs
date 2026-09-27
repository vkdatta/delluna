export const name="symptoms-fill";
export const id="dl_b5ed26245b7a42f9aec2";
export const url=new URL("../icons/symptoms-fill.svg?v=2622299a9b93d555005680b14f8de3f614d5bc4b2511183291c794bac5e687db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
