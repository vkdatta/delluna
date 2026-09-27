export const name="lucid_1-cloud-rain-wind";
export const id="dl_7b36e10e047644b195f8";
export const url=new URL("../icons/lucid_1-cloud-rain-wind.svg?v=62b8091a94ac3cb2eea223abda8cb82c525770a7dfc599d98da16fbfbb594969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
