export const name="integration_instructions-fill";
export const id="dl_e21dcd779876424481a6";
export const url=new URL("../icons/integration_instructions-fill.svg?v=2825ed10c3e99d158f6b25657c42ac6b26d97c69c33526df90fe7f3c12f54ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
