export const name="jamboard_kiosk-fill";
export const id="dl_75a049c1548243b89e14";
export const url=new URL("../icons/J/jamboard_kiosk-fill.svg?v=adf66900d23692363fccd2b89da69662f87a411a94f63bfa18c685cf92ade2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
