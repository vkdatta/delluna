export const name="letter-circle-h-thin";
export const id="dl_ba572c7a76ef41a489de";
export const url=new URL("../icons/letter-circle-h-thin.svg?v=1f6af7717be2c5383bd84ac3934d330fe81f70e06447558094e42be1e23ca855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
