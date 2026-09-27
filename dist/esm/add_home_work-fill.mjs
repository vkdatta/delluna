export const name="add_home_work-fill";
export const id="dl_2ddbf26f6fd595ae0dc1";
export const url=new URL("../icons/add_home_work-fill.svg?v=1fed00111da7ee7e3a56611f6613a6ae8f739819c799fb6a062aae488865e746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
