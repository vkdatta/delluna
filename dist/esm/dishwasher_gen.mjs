export const name="dishwasher_gen";
export const id="dl_b677697722b34920a6e4";
export const url=new URL("../icons/D/dishwasher_gen.svg?v=6c2a8083f9003a4e348d47da421f266acc2895ac5425658d429d26b1e8a73680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
