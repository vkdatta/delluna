export const name="watch_arrow-fill";
export const id="dl_b6e95e1239ca7593bd1d";
export const url=new URL("../icons/watch_arrow-fill.svg?v=70d9e58aa67425da4aecac8783c1c26972e65c07f994583b431b3e75d6460957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
