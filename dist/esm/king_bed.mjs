export const name="king_bed";
export const id="dl_6da5da75a2c2dda29235";
export const url=new URL("../icons/king_bed.svg?v=3173cab6d67f0d9e35a459446773091138d57c2eb4060c3673faa13834d66e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
