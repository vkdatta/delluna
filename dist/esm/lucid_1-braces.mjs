export const name="lucid_1-braces";
export const id="dl_0213e01cad0e43eaa333";
export const url=new URL("../icons/lucid_1-braces.svg?v=df0aa13c59c7da23f83cc6501180a02a820b2c8772067070661057c04cb46dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
