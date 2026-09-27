export const name="vital_signs-fill";
export const id="dl_8ce5d75ca010b16442f3";
export const url=new URL("../icons/vital_signs-fill.svg?v=eca11320bcedf8ed172bc8f2749d6ce4a000bfd3ea2c0091d1eddf5979ae6185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
