export const name="lucid_1-bottle-wine";
export const id="dl_049ef70374624d54a559";
export const url=new URL("../icons/lucid_1-bottle-wine.svg?v=9ea50fb0c01c1ab7d90a0eea9cfa234a55b19285075eb80a6ffd5bc9fe05bab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
