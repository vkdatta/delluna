export const name="sos-fill";
export const id="dl_06704a3c1c7882f436d4";
export const url=new URL("../icons/sos-fill.svg?v=7a42486a43197efe592e45061aa6e50e47c4ef35ff66659c1a8e078a035003b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
