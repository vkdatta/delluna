export const name="skillet";
export const id="dl_ae632df32c35995ff571";
export const url=new URL("../icons/skillet.svg?v=7fdfd734a3dca39652c00d1e9dbdf94bb5b4e8f58c091754af8dbbab138cbc92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
