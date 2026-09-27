export const name="settings-fill";
export const id="dl_ac3a4ee1abcf67fdfa5b";
export const url=new URL("../icons/settings-fill.svg?v=0e6f1d74a71b2da22ebae959ec6c1f0175c8672481a665273e788017c515f8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
