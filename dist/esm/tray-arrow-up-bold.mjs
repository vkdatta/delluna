export const name="tray-arrow-up-bold";
export const id="dl_8633b91588f34ef79f58";
export const url=new URL("../icons/T/tray-arrow-up-bold.svg?v=f3df03957981d4db06857cf115cec0a6b72ef8d2b8ad947cb92c228e80b3c6e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
