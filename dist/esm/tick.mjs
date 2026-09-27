export const name="tick";
export const id="dl_57f503dee03c4a4aac79";
export const url=new URL("../icons/tick.svg?v=571bb9c7a7d01f0d0ad7e2e98e2c59c8118ac6ea905170a0ac75b68d6e3437cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
