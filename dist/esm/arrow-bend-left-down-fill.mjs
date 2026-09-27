export const name="arrow-bend-left-down-fill";
export const id="dl_73e74e7696f54315a6e9";
export const url=new URL("../icons/arrow-bend-left-down-fill.svg?v=c050b7398ec88e47b1adde21c6162bcb4217db44c7606a40db98f4623dcdad19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
