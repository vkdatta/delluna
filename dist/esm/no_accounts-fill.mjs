export const name="no_accounts-fill";
export const id="dl_8d7feeff73ce4fce99d0";
export const url=new URL("../icons/N/no_accounts-fill.svg?v=750cc0c7ac4545d4bfc6acb9375af76c5301248c34ce32ecad4430f38635cae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
