export const name="lucid_3-search-alert";
export const id="dl_d64602537a694524b35f";
export const url=new URL("../icons/lucid_3-search-alert.svg?v=2e565b8cbe6245c18818ecbd787920d7ade9058029b2d9cb73bf5e8b935ccf30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
