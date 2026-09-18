export const name="home_max-fill";
export const id="dl_69d0841b770c46d48dee";
export const url=new URL("../icons/H/home_max-fill.svg?v=3911c7da0d9755ba107de1b6e7f8f5530647df1acde381aa5e14dce48ed434b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
