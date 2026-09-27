export const name="table_chart-fill";
export const id="dl_682ff2eebbc340f06227";
export const url=new URL("../icons/table_chart-fill.svg?v=bf864f7cc9ad546a17e865d6de0afe6c38ff05a471a847169e2cab652ce8a49b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
