export const name="currency-dollar-duotone";
export const id="dl_cbd8eaff1fbb4287bc3b";
export const url=new URL("../icons/currency-dollar-duotone.svg?v=da9188cd9a531e2945fb8341e3523b8bf8bd36364cabeb53038b4ff27e4fade6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
