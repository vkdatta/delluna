export const name="list-magnifying-glass-light";
export const id="dl_a9a366949b024b08941d";
export const url=new URL("../icons/list-magnifying-glass-light.svg?v=dc4482cdcf0713c436cf01e934f5fc07c9054b6c9dfd947b2f173853d515dab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
