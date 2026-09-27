export const name="battery-empty-bold";
export const id="dl_8804b188b5e246a7aa3e";
export const url=new URL("../icons/battery-empty-bold.svg?v=7951731aea47a4656ae35d3b60c45fed44701cf035682ac7480309118eb11146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
