export const name="chart-pie-slice-duotone";
export const id="dl_611c0b424fab45b49c30";
export const url=new URL("../icons/chart-pie-slice-duotone.svg?v=84b628c058931964e06dccb99c7bdca1a6e78ef20a774131531b650be00cae15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
