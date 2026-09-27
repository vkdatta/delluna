export const name="lucid_3-repeat";
export const id="dl_f225569790574796a701";
export const url=new URL("../icons/lucid_3-repeat.svg?v=69989f56e65cb609e3d8c87348b8def4b0206a9edd4a19bde4817a2a3a6a8508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
