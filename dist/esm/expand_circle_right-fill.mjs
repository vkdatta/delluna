export const name="expand_circle_right-fill";
export const id="dl_ab7d91ad236b4db2b9f8";
export const url=new URL("../icons/expand_circle_right-fill.svg?v=559eb62d0bf47927e64f3ea89d34f8681ab58ef4365c05b8ef95f381ed92c9d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
