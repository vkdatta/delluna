export const name="warning_off-fill";
export const id="dl_a5de349e60cc9d7bc668";
export const url=new URL("../icons/warning_off-fill.svg?v=95660b72426410ef0a06e998c8bd28711e85f677a2b522a437743780bcd2292b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
