export const name="car-light";
export const id="dl_cf0aee569a9341699455";
export const url=new URL("../icons/car-light.svg?v=4d836b278e11d91e0b46719033f541a19b9883ac45dfad465025ea0571432a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
