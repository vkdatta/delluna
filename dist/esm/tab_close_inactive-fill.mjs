export const name="tab_close_inactive-fill";
export const id="dl_14089b9a668eea9633a1";
export const url=new URL("../icons/tab_close_inactive-fill.svg?v=5e3581daa63556eb88d2953d9a17599833de0b3866d581acd02de979c6a34d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
