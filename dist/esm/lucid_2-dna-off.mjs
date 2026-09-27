export const name="lucid_2-dna-off";
export const id="dl_290764e298894a0a8ce3";
export const url=new URL("../icons/lucid_2-dna-off.svg?v=8d81dcef09fc846e8a7f392d232d5f18539cf123f2216047344c201122a717ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
