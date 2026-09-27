export const name="borg-fill";
export const id="dl_d8b34a38dbb435003350";
export const url=new URL("../icons/borg-fill.svg?v=ff884f0a16008dcff5966d29603e79da2915476d54d109083364530a69201b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
