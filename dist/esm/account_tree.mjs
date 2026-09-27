export const name="account_tree";
export const id="dl_b61f8efc76c97f07b662";
export const url=new URL("../icons/account_tree.svg?v=aa809c24cbbf0ff0c30fda8bcd48335335faf71ea24686fa245fc32d6aaafdf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
