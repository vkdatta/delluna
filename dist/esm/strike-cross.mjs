export const name="strike-cross";
export const id="dl_aa1122a1e9817ec57904";
export const url=new URL("../icons/strike-cross.svg?v=8b1c57a52c39fcd0ff3a89239a6289592cef13e8d2ced9108b537ee329662e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
