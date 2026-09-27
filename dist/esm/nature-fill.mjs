export const name="nature-fill";
export const id="dl_d5432cd40b9232271bf3";
export const url=new URL("../icons/nature-fill.svg?v=badd0badff71d7c7600f522ef96fd01e56bcee1c2c9f903c8ef32b4d93ef52f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
