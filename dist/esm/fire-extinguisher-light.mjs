export const name="fire-extinguisher-light";
export const id="dl_14c6af4fb71d4398b7a8";
export const url=new URL("../icons/fire-extinguisher-light.svg?v=28e1e773655610335199f98953693f26b98007fe43b2b01c48d712c318082054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
