export const name="telegram-logo-thin";
export const id="dl_a3e48a27b607ba64e4b7";
export const url=new URL("../icons/telegram-logo-thin.svg?v=5616eff1520e23355f05e84c600bd63dae48852634107ea680b5f17ae6577164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
