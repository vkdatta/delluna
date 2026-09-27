export const name="lucid_2-file-chart-pie";
export const id="dl_a46a11d50736475fa5d1";
export const url=new URL("../icons/lucid_2-file-chart-pie.svg?v=b50f11757c35bfa16d4ac6931db4b9cf14f747e705b0f7f73325086eb3c5d695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
