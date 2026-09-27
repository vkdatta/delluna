export const name="utensils-crossed";
export const id="dl_47c46a9a65504c069a8e";
export const url=new URL("../icons/utensils-crossed.svg?v=277d28d7e95d35ac677b42da1adb03ce58922cb5bdc5902bb8d15f25ed5a4434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
