export const name="lab_research";
export const id="dl_7fe0589d4ced46d98608";
export const url=new URL("../icons/L/lab_research.svg?v=e1b9869d4e56a35a12f0b9f865ac4bac69b105bcf022ade4686a5122b750a042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
