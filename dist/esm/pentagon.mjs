export const name="pentagon";
export const id="dl_18539bb422854721aa98";
export const url=new URL("../icons/pentagon.svg?v=6b17b6c23fd016a091f2449748f2bdc698edd1266d691acfaa8becd49f095767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
