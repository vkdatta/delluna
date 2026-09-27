export const name="arrow_shape_up_stack-fill";
export const id="dl_2de8749f8dea52514a43";
export const url=new URL("../icons/arrow_shape_up_stack-fill.svg?v=c6546281012760aba0053cb4934bcab8428caf38fcb171ea5ea648390b9daca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
