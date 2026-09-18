export const name="music_history";
export const id="dl_3fcbc2e4c9ea4066a846";
export const url=new URL("../icons/music_history.svg?v=23aa4502bc96d80675e2f69233e43f26490dabd2c05bea7a324d3dfce360c4cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
