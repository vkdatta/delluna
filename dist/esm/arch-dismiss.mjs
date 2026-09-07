export const name="arch-dismiss";
export const id="dl_44732e6d6a6041a7b194";
export const url=new URL("../icons/close/arch-dismiss.svg?v=6ee0684e9ad91ce7151ab82d70c321a091a7e7b89be2f8a4b086ef01972cf004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
