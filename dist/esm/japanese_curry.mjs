export const name="japanese_curry";
export const id="dl_d59edfcea02cae543c5c";
export const url=new URL("../icons/japanese_curry.svg?v=72ea21752d07dfcb147de3f785fe404f38857540eab613352c554a6e51bb01ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
