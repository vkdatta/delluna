export const name="lucid_2-hard-drive";
export const id="dl_ea5e7c000d154ecd90aa";
export const url=new URL("../icons/lucid_2-hard-drive.svg?v=122bd85be6faf21f5cf2c88d382b4a15d447b6a501571e0a8dbb0fd44080c707",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
