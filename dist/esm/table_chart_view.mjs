export const name="table_chart_view";
export const id="dl_a6cfcbd226ca56ab4b1e";
export const url=new URL("../icons/table_chart_view.svg?v=706f06b23997c7409315cbe2c1f45e3117e3a2aa3d93733591442b940ab4c4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
