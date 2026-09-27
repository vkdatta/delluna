export const name="lucid_3-omega";
export const id="dl_ddee26e284b54b21bf22";
export const url=new URL("../icons/lucid_3-omega.svg?v=d485b508b01180497639dcf2c531de33f0813e83e82b19227d05daaed7623598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
