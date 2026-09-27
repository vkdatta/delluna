export const name="hail-fill";
export const id="dl_e8a5b09de25069572a3d";
export const url=new URL("../icons/hail-fill.svg?v=5a387239658369f614218199db1d8f8a1e38f55223983aa55a52c775be062c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
