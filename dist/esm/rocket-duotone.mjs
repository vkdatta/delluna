export const name="rocket-duotone";
export const id="dl_371b8c97adf645f7a296";
export const url=new URL("../icons/rocket-duotone.svg?v=5db50a1e56f2334c036ca8b2b764d65954f7b77689445e1e0d76273f684d817d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
