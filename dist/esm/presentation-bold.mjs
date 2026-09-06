export const name="presentation-bold";
export const id="dl_fdd08654aff24a2292a4";
export const url=new URL("../icons/presentation-bold.svg?v=b56b257044fc108ba124eed54440f180701542722a7f0f96e2af2f07ca3dd9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
