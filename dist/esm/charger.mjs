export const name="charger";
export const id="dl_18233e582c3a91f5fd6c";
export const url=new URL("../icons/charger.svg?v=f9833e268a3ab458ba0827e199b507d0fa54a83173b311b98436dd7c46cfe018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
