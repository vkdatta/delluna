export const name="windshield_heat_front-fill";
export const id="dl_59b30ac11f990b5df3c0";
export const url=new URL("../icons/windshield_heat_front-fill.svg?v=ce4e4cf7866531d05e9bb5274fc2899d4b0df6a804f97b077979507550966a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
