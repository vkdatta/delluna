export const name="no_accounts";
export const id="dl_e3b82baf3efc4557ba12";
export const url=new URL("../icons/no_accounts.svg?v=ef757f71979b35c076d6df05c1cea9af6b7bdac38699c6cbbd70b5e99a52a3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
