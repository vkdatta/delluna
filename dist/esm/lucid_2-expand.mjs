export const name="lucid_2-expand";
export const id="dl_97b17f5b806143ae9187";
export const url=new URL("../icons/lucid_2-expand.svg?v=500f0bdcca0579a00de0dc4cb1f46dec90fe2423439691a56657d1334465d577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
