export const name="oil_barrel-fill";
export const id="dl_75fca0341b4c4af39f1c";
export const url=new URL("../icons/oil_barrel-fill.svg?v=4ccf9622a8bb6ef17b531f6260fcb132ab39dc61157dc4473e2a9878fefc5144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
