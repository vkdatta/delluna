export const name="table_chart_view";
export const id="dl_923683660223f2d3a123";
export const url=new URL("../icons/table_chart_view.svg?v=abe5e6c80df69e5b7552afa5bb5048deca39cd932a0e613bcdaf9e1b9cebd095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
