export const name="nuclear-plant-bold";
export const id="dl_e3b79fdac8764bcba7e5";
export const url=new URL("../icons/nuclear-plant-bold.svg?v=97fab5929b12e7fbad03b97530c3b6801380267241369908a913cb4cd31e3be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
