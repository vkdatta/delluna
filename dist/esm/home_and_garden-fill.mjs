export const name="home_and_garden-fill";
export const id="dl_70893bd002edd212bb5d";
export const url=new URL("../icons/home_and_garden-fill.svg?v=4bc826ecd4f57069e11ad4079c58a2a6e68caec20ff454b78242866598b17b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
