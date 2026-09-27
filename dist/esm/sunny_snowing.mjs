export const name="sunny_snowing";
export const id="dl_6da7f3b23fdc2dfd4b4e";
export const url=new URL("../icons/sunny_snowing.svg?v=6fa9a7f41f0b5a0523342d949516f5a30783fbaa1eb63af459fe1374fe162844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
