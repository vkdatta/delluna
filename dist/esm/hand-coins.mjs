export const name="hand-coins";
export const id="dl_e5eced4fa9de4b5d813c";
export const url=new URL("../icons/hand-coins.svg?v=8ac61eda6d2e2f893d7113a734ea12b50316c7ff51a3f5270c3a4cd9b1734add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
