export const name="face-mask-duotone";
export const id="dl_de8e3502fb81470e948d";
export const url=new URL("../icons/face-mask-duotone.svg?v=4075b25fe6095c0f28953d3377ebad5bfd0c735cc72da633b9a69150dbc81d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
