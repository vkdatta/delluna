export const name="barbell-light";
export const id="dl_d43d26daca49493fb7e6";
export const url=new URL("../icons/barbell-light.svg?v=d1aa59b4d042fc510d01584711594e4d301217791230bffcc015b9c32a3375ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
