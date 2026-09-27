export const name="lucid_1-bug";
export const id="dl_bc6eeccfcd784b6283fa";
export const url=new URL("../icons/lucid_1-bug.svg?v=2e31f44ae0904b27f2592f9aa459f894c6471c566f4b0d26e6fc515b2a54ee9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
