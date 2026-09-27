export const name="charger-fill";
export const id="dl_7b83a68adca66ac8d414";
export const url=new URL("../icons/charger-fill.svg?v=96c1f3d8b6d116222cedf20669b14d94a23d280fbf98a2539dcdc59b57794a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
