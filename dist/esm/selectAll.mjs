export const name="selectAll";
export const id="dl_1adb7f6aa93b026b4caf";
export const url=new URL("../icons/selectAll.svg?v=a15735e4e715b79783745070c0144ea3da38ed8d9623c821439b77c5c0c0e22a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
