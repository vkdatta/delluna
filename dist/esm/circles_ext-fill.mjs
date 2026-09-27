export const name="circles_ext-fill";
export const id="dl_62a3ef2ce654e4175760";
export const url=new URL("../icons/circles_ext-fill.svg?v=dbb8be310990681172c2b107f57c842872da6a58e73f3e2c5fe61317fc8bedf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
