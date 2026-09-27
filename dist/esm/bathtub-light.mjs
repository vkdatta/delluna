export const name="bathtub-light";
export const id="dl_47744aab0c8c4f14a2f7";
export const url=new URL("../icons/bathtub-light.svg?v=bb013754de5a5c1dea0ce8471b270e1092088a32bdedc7b89380a617e8212057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
