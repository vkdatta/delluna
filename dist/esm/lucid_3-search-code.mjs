export const name="lucid_3-search-code";
export const id="dl_e422ed7d46694499aefd";
export const url=new URL("../icons/lucid_3-search-code.svg?v=db90d572a7d31fb102d8dd28b62211df613e9fb5a9ed410af9384daabad91d9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
