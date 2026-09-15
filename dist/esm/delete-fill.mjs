export const name="delete-fill";
export const id="dl_2b5bd8ba7d1d4ca58cb8";
export const url=new URL("../icons/D/delete-fill.svg?v=f3118efeb8c4b2afb81d29eaddd05e07194035934ba8469556f743dc9eb4d20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
