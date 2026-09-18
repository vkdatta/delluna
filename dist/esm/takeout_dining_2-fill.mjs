export const name="takeout_dining_2-fill";
export const id="dl_c4ffdbcfebbd4af3b18d";
export const url=new URL("../icons/takeout_dining_2-fill.svg?v=980cd573e36b4d9cb53ffec004a77f57dc31f78101900c90be6b4a4a5f3dfe1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
