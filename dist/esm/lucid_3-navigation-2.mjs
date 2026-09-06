export const name="lucid_3-navigation-2";
export const id="dl_bd9db738b458487ba0ae";
export const url=new URL("../icons/lucid_3-navigation-2.svg?v=b87aad8eae367a437cba1573faa5381ea9a58c19b30ede4de97e83fc76399b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
