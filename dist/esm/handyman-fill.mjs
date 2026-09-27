export const name="handyman-fill";
export const id="dl_acc441140f5901151a26";
export const url=new URL("../icons/handyman-fill.svg?v=943b1b1cfa45e7701f8e117ebbecb25ab4d2567c7b56f6e61bd38ac3a44a6722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
