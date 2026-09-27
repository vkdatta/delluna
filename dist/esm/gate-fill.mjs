export const name="gate-fill";
export const id="dl_0aaca2dcc59e4b532fba";
export const url=new URL("../icons/gate-fill.svg?v=2accd944d3a88c2c34f14731de0199d7fb892f0f43381a6e33159b7bee549151",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
