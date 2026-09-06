export const name="cloud-rain-bold";
export const id="dl_642f46b2e531464496fb";
export const url=new URL("../icons/cloud-rain-bold.svg?v=d0a2b6987eb3f8b778957df0986b0c25a76b58f253096ef1537ca5fdf7c23f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
