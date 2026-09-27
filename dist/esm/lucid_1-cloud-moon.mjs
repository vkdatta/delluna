export const name="lucid_1-cloud-moon";
export const id="dl_4eae36cb2ee8463e8d1f";
export const url=new URL("../icons/lucid_1-cloud-moon.svg?v=1148c8ee4440c1c8e87ac4d8050f6c5e99c60c5d5cc99c976d0404e774ad55e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
