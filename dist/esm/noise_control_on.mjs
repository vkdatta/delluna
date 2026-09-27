export const name="noise_control_on";
export const id="dl_97815bac3356ff8fcfde";
export const url=new URL("../icons/noise_control_on.svg?v=aa1a5040a2f29f6beea8030a2f18e4f450c5bb6abc4bb20a43e5753a107823ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
