export const name="agriculture-fill";
export const id="dl_68f776c0582b697386fc";
export const url=new URL("../icons/agriculture-fill.svg?v=65de0626b45322a5fe1fcdc13d1ffbc6d862fc78efe25e1e60e29642e6fd2295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
