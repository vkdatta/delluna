export const name="lucid_2-crown";
export const id="dl_814b15d2672841dfb73e";
export const url=new URL("../icons/lucid_2-crown.svg?v=bf1db9faa04fdbc8e7cc256679c87cbd58a2f015a71c6a5eb65f86fd99f9d6d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
