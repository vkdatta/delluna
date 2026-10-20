export const name="menu-left";
export const id="dl_9c0e75b5862b40ca944a";
export const url=new URL("../icons/menu/menu-left.svg?v=cf577ff7aded159f529e168095e2c6aba047a35ab46c0b96f8b72b90d697d1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
