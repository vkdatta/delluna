export const name="home_pin-fill";
export const id="dl_6c2a46b0c64df01dfe30";
export const url=new URL("../icons/home_pin-fill.svg?v=7e5a6831237c51b257fdab8c4c0aaadf04c32d6295aaeebdb8ca529abff58c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
