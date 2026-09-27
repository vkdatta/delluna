export const name="macro_auto-fill";
export const id="dl_779be582ae67e9fdfdb0";
export const url=new URL("../icons/macro_auto-fill.svg?v=466c82e3bec6f0017de95f22af513757a1642d2f3e4e0890f2a8b4935e4d8b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
