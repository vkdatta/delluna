export const name="avocado_bean-fill";
export const id="dl_f4be925d635876c252e8";
export const url=new URL("../icons/avocado_bean-fill.svg?v=83d85c4d67cdd5e56dcf671c3c4ece88e05a4bac7d6c351c0458ae42fb79c6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
