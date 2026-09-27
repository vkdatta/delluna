export const name="format_bold";
export const id="dl_7d9a8da877397b76264d";
export const url=new URL("../icons/format_bold.svg?v=542be56407ced4af5ad5e0dac48fdc3f1248841850f5f3811998ad94f5126705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
