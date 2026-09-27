export const name="chart-pie-slice-thin";
export const id="dl_82d654aed0ae41979e12";
export const url=new URL("../icons/chart-pie-slice-thin.svg?v=2e4b8c0942b2e5e5383ca7c23a44a2a49ca0a1d7c18aa96e38c86fb72ba88736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
