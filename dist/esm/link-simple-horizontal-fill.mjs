export const name="link-simple-horizontal-fill";
export const id="dl_62fcb9df65d6423eb2c7";
export const url=new URL("../icons/link-simple-horizontal-fill.svg?v=2161ce6dcc32f449709782f892aa074059e7e03391d192d4dcac9085887fd276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
