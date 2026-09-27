export const name="wallpaper-fill";
export const id="dl_a04a3e395dd9385fd378";
export const url=new URL("../icons/wallpaper-fill.svg?v=218730fcc2eb71fabcbc8e3ea301553c7316a8db5652c882dfaee93a678aedb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
