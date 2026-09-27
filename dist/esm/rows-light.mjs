export const name="rows-light";
export const id="dl_a425d4c0d79345619b95";
export const url=new URL("../icons/rows-light.svg?v=4c640056ea9e3381e85a5ea957d17bfd7907e910d982ede6f0e0d59eed518cff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
