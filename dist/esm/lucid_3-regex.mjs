export const name="lucid_3-regex";
export const id="dl_e7732b6e7e184246a9d3";
export const url=new URL("../icons/lucid_3-regex.svg?v=9b8d0dfd1dfc183b3c44d44486cdfd02d676cceb286bda79d97d7be3581bcd03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
