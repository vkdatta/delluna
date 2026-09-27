export const name="label";
export const id="dl_1a44a9d7b12a55e9d081";
export const url=new URL("../icons/label.svg?v=45ac052e48b4f1b3759ab735714bd6620d91ddd16aff9375c1156eeeb7508997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
