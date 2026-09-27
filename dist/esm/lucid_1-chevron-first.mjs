export const name="lucid_1-chevron-first";
export const id="dl_1f18f8eb418e4569ace8";
export const url=new URL("../icons/lucid_1-chevron-first.svg?v=956b89432b03b450707fa604491a9af186ece66f0c41ab0b7950c8dd4b300561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
