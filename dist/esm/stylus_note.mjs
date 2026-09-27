export const name="stylus_note";
export const id="dl_913eb0d5290350b501ef";
export const url=new URL("../icons/stylus_note.svg?v=de7931afd78e7faeff4f9923dfdf5910d42438c03481ca378d3758312d112462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
