export const name="variable_add-fill";
export const id="dl_5e0af659c5df3e6df596";
export const url=new URL("../icons/variable_add-fill.svg?v=5e08764050e73f288448dc7c5eea0b1b650d26b8f447c6fa155df64435d1013f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
