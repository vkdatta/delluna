export const name="air-traffic-control-light";
export const id="dl_8b35f7aba080454f8235";
export const url=new URL("../icons/air-traffic-control-light.svg?v=819b8a61bfa4c3746cd79dccb732448841188f41056c523c373d65e3820b26e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
