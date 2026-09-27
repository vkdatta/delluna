export const name="lucid_3-paint-roller";
export const id="dl_f9360ec842b1487c8d4b";
export const url=new URL("../icons/lucid_3-paint-roller.svg?v=c4c632099ec26127d48a3726bd1966befa45353cdb27b53eb3474e4b85e184cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
