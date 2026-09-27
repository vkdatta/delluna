export const name="folder_supervised";
export const id="dl_1028652b5975e3f09a4a";
export const url=new URL("../icons/folder_supervised.svg?v=437dfad69cda395be2a5d51ec1e933279b97f9ab09fba882886b8cf7aa5d2763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
