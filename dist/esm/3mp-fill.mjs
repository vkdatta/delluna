export const name="3mp-fill";
export const id="dl_5c9d8b56621deb3c7b4c";
export const url=new URL("../icons/3mp-fill.svg?v=8b7434c1ad832c8752f43f0ebc59dfc7bfec75665cf18cfa31750521661e8b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
