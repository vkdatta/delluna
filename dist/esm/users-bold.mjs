export const name="users-bold";
export const id="dl_4510a01aecf0ca43bc02";
export const url=new URL("../icons/users-bold.svg?v=6b1e62d022471fc0078f99a115c0f71427ea4c19d30429c3957d906c07380bc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
