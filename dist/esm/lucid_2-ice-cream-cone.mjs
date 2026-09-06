export const name="lucid_2-ice-cream-cone";
export const id="dl_fd42b980a99b4c4084ea";
export const url=new URL("../icons/lucid_2-ice-cream-cone.svg?v=fa8f3d141346f264cc74b73ccc923911a048c58fa41278f78ac93eee740a4a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
