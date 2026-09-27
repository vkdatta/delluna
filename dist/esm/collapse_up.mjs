export const name="collapse_up";
export const id="dl_04f767de0355e9ffd754";
export const url=new URL("../icons/collapse_up.svg?v=7144a387bd6094ab92aa7cb5cfcd6086654b1a900c41213294dd014ec5a7d2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
