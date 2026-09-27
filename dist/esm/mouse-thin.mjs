export const name="mouse-thin";
export const id="dl_8df4701e664c4c4a8fc4";
export const url=new URL("../icons/mouse-thin.svg?v=dc0bcbac5721ac69b3ee2b7d0bc629a27d0c6b2228dae49f4ec3ed9d6085c925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
