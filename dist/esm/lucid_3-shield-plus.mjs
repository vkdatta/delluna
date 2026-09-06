export const name="lucid_3-shield-plus";
export const id="dl_51205f51211b47caae4b";
export const url=new URL("../icons/lucid_3-shield-plus.svg?v=3b0d8b600a06389e9a6650010179f3340962faccd3bec35cc1edc2b310174fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
