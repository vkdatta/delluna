export const name="list-magnifying-glass-light";
export const id="dl_a9a366949b024b08941d";
export const url=new URL("../icons/list-magnifying-glass-light.svg?v=65dfb3803b373f94838935523f79162fa67b25301f4a0b706cea3a11b94fd4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
