export const name="home_pin-fill";
export const id="dl_f46f9140077c5648363e";
export const url=new URL("../icons/home_pin-fill.svg?v=bdaa9ee2c636df4722a33b04efd0a90576002b2ab27895113bf51f8a345cb9ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
