export const name="lucid_2-forklift";
export const id="dl_0dbfddad55aa470ab3a1";
export const url=new URL("../icons/lucid_2-forklift.svg?v=2fc377da1c08dcdee8b655ad63adc203ec59e1be2afaad69ef0bb6d077f24d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
