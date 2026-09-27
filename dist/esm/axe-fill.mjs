export const name="axe-fill";
export const id="dl_288ded07b14d46549d24";
export const url=new URL("../icons/axe-fill.svg?v=5f08dac5df788e4e88a5bc916e96b6892e74c4116257e483b06f2e223dad2210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
