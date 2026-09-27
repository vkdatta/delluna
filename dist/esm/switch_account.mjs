export const name="switch_account";
export const id="dl_9c24c1373694906b299a";
export const url=new URL("../icons/switch_account.svg?v=afca5b7033ee0554a0a7767676a82665083efe97277a191b1bab14edd3295548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
