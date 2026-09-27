export const name="deployed_code_account";
export const id="dl_e02e431961be1b959505";
export const url=new URL("../icons/deployed_code_account.svg?v=9ac20c0866f323fb771234306d0007a0152e8defdcf17f37de71eb87c02b61d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
