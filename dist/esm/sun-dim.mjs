export const name="sun-dim";
export const id="dl_21fabc86e67d41bab2ff";
export const url=new URL("../icons/sun-dim.svg?v=a540874f64aeccab025c007390c89ad1bfd73ea2d3a3f1f22a9dc4f6d31b86db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
