export const name="database-bold";
export const id="dl_bea5ab645f774634a484";
export const url=new URL("../icons/database-bold.svg?v=efb6bcac7673333ac5fd9aa383f1f0f0ac8611e620a1e7838e09c8678c014a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
