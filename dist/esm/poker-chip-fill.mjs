export const name="poker-chip-fill";
export const id="dl_695ba006b4a54f1d9928";
export const url=new URL("../icons/poker-chip-fill.svg?v=8b4289e8f5e441dfcce51a854016ab85eff093cca633a19db7526794beb20f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
