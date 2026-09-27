export const name="home_max-fill";
export const id="dl_6399726227c8673c9aef";
export const url=new URL("../icons/home_max-fill.svg?v=3911c7da0d9755ba107de1b6e7f8f5530647df1acde381aa5e14dce48ed434b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
