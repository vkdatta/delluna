export const name="stress_management-fill";
export const id="dl_08137424f418c52031e0";
export const url=new URL("../icons/stress_management-fill.svg?v=2cbd86ef90100d06bacd827ff4c21aa3858a23a7eaf0af56d20893b275341f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
