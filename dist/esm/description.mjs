export const name="description";
export const id="dl_e28273ff8282b2a9c48b";
export const url=new URL("../icons/description.svg?v=962c7d0e0239c9b2a948a80b01223b7a9f77411aa446ea9b14d15322ac81982e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
