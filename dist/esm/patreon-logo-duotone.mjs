export const name="patreon-logo-duotone";
export const id="dl_8ef3c2d530ad4c048fc7";
export const url=new URL("../icons/patreon-logo-duotone.svg?v=50db197b7efce41804e972f3db58a8253100ba179b638aaaf02834848845bf04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
