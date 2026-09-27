export const name="lucid_1-chart-network";
export const id="dl_43366763d7754f32aa97";
export const url=new URL("../icons/lucid_1-chart-network.svg?v=a4a3cc2a88311ae5743fa6ac689a8ed022ebed4a95b30af77fc3d75b539c36f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
