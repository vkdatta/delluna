export const name="dangerous";
export const id="dl_94a54e67ba8849469cb2";
export const url=new URL("../icons/dangerous.svg?v=070c652300b44ebf82dc2f16f8d0a3a48e55dd5662bbf302a0c7c5746fd59682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
