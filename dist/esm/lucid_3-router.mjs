export const name="lucid_3-router";
export const id="dl_e31df08499634d6ca69b";
export const url=new URL("../icons/lucid_3-router.svg?v=c1faa91080e17bb4ae63cfc38957eb9f12bbc9ef2a8940077d7440ae83eb9c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
