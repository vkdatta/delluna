export const name="amend";
export const id="dl_a2dfe5702da24c33960c";
export const url=new URL("../icons/A/amend.svg?v=07b524c99ef837c1c3b74e7d29ac5a223e9cd7ea87e494300e71b0e5b47edc00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
