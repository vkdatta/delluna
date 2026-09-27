export const name="apparel";
export const id="dl_fafbb93681f419564e69";
export const url=new URL("../icons/apparel.svg?v=cbe0cdab5dcb5d9d9eb0ae903cb182de7895cbe73f57f43b201260e7f0402477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
