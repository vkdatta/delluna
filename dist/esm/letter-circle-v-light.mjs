export const name="letter-circle-v-light";
export const id="dl_c5d3f18359244906850c";
export const url=new URL("../icons/letter-circle-v-light.svg?v=11def091634d2e7617cc599ac706c5270c60e448cfe76c184309d4cd5d16cdad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
