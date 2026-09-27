export const name="mobile_lock_landscape-fill";
export const id="dl_833c13b3fc3924bdcb8f";
export const url=new URL("../icons/mobile_lock_landscape-fill.svg?v=da901f2ed9ebff5b139ee3e6ae617002199af4165df94631673936f6963cfdfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
