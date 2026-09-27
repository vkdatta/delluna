export const name="forest";
export const id="dl_354d290e2c709b0fc976";
export const url=new URL("../icons/forest.svg?v=3211ac81f38dc00d9e5f4cad1accd44bce723740bd254f8a47863027ea0f3af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
