export const name="lucid_1-cloud-fog";
export const id="dl_dcad400f654149b5bb8d";
export const url=new URL("../icons/lucid_1-cloud-fog.svg?v=dfd7f7001a1b6063de4703780736769250718bf32dae7f6db03df97aed38fcdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
