export const name="king_bed-fill";
export const id="dl_a7771995e9ba16b18d9c";
export const url=new URL("../icons/king_bed-fill.svg?v=d2026da20286775a12b51b77d31ad07fed1e6d18328c469414988c65c6a4fcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
