export const name="mystery-fill";
export const id="dl_51949b2f8606350c37f2";
export const url=new URL("../icons/mystery-fill.svg?v=7a236c0e68ca920ba63a58ce5b04bb77ef032ec40e441055ba397536d364923b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
