export const name="replit-logo-bold";
export const id="dl_910cbe382edb474a8088";
export const url=new URL("../icons/replit-logo-bold.svg?v=f9b860bbd8aefaee042668c2732583e36a7e5155af9a97f4f507f8cc6a81c2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
