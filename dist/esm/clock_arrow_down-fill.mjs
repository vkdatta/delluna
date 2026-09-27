export const name="clock_arrow_down-fill";
export const id="dl_48938bd8044cf98642b0";
export const url=new URL("../icons/clock_arrow_down-fill.svg?v=cadbcff0ca2716ccb09fb7313274a89651440b258cae9c95565efb96204b9e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
