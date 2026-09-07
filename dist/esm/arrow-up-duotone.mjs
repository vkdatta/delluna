export const name="arrow-up-duotone";
export const id="dl_91c1a5741f254cf8af64";
export const url=new URL("../icons/arrow-up-duotone.svg?v=15ea3ef574110052e5a695d6e356c7f1649597d10f30b27eff251df8a6fe1d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
