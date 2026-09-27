export const name="no_encryption-fill";
export const id="dl_1e506a4b6fd3ea0f709c";
export const url=new URL("../icons/no_encryption-fill.svg?v=92bb7907c3486d2ffcb598e1be49a8733ffc95c319e4d8a16616cfd54a7b8d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
