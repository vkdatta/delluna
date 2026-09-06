export const name="arrow-square-right-light";
export const id="dl_eb4b89cf99444dfba6f0";
export const url=new URL("../icons/arrow-square-right-light.svg?v=e6531b5faf4adb1785fff8b46476225ec535b793a6a74dd2bf8c0d28befb055c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
