export const name="switch_account-fill";
export const id="dl_1afaa3a35726607ac922";
export const url=new URL("../icons/switch_account-fill.svg?v=2ef9d033c47ac476f6f1838ad823cfcc22668aba02ec549cacfb6dfa5b97c551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
