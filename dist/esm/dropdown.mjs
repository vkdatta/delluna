export const name="dropdown";
export const id="dl_823052a6939af1116dbc";
export const url=new URL("../icons/dropdown.svg?v=8e561d1d6ffa4681a736749e631a2ee4f7003b9c9ac0a3d03b31e3777e74bcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
