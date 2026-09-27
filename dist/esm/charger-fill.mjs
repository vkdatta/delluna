export const name="charger-fill";
export const id="dl_731f3a46089865c258fb";
export const url=new URL("../icons/charger-fill.svg?v=b6a52cfbb45f899109762998b9c2674ff45e7814199e634e3e7d6d39f18656c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
