export const name="notepad-duotone";
export const id="dl_42282d6a4cf84a88a54c";
export const url=new URL("../icons/notepad-duotone.svg?v=3a20ddf6072a8b07024404e5e0dcc6d91ddffdfe7bab53f3e8a220cdb4273214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
