export const name="home_and_garden-fill";
export const id="dl_4fdc5825e28802d61622";
export const url=new URL("../icons/home_and_garden-fill.svg?v=4ebeaf2b482fb0b5426086c7548c53fbe2e597497371b1bc0d9e9e5dd16e1375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
