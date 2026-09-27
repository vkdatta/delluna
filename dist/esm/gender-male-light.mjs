export const name="gender-male-light";
export const id="dl_1e0201451ba44386bde3";
export const url=new URL("../icons/gender-male-light.svg?v=504339ad6ceb022312bf04e9682b0a1662709b188b61fe3afd8a33d925ed5fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
