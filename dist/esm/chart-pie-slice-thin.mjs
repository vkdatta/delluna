export const name="chart-pie-slice-thin";
export const id="dl_82d654aed0ae41979e12";
export const url=new URL("../icons/chart-pie-slice-thin.svg?v=75eab10fe8968241726566ecf8eda497228dcf2d33475edadf556a36c4d893fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
