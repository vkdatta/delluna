export const name="air-traffic-control-thin";
export const id="dl_1d17cc2f2cbf452c8a49";
export const url=new URL("../icons/air-traffic-control-thin.svg?v=9d0a63adc3c846b80ba98a79e53eecdec860fff94ccf782904056c7bf8e8d751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
