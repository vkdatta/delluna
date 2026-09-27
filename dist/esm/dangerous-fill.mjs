export const name="dangerous-fill";
export const id="dl_20e419d904284e15f5a6";
export const url=new URL("../icons/dangerous-fill.svg?v=b1a7f5dc179994938e739cd722ac55280defeee0e444efd6d2a3435b9804fb8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
