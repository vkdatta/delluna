export const name="road-horizon-fill";
export const id="dl_82c6830735284e40bafd";
export const url=new URL("../icons/road-horizon-fill.svg?v=551a134a1f213e47e2409bfebb8d544ba6c69ae91817eb709b009d258138cdbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
