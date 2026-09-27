export const name="three-d";
export const id="dl_5f5b38254b6decee8b42";
export const url=new URL("../icons/three-d.svg?v=0f8891f8e1a3ad0dcb31b58b0810e5a44b4ab2be483b3c43e5331c73744469dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
