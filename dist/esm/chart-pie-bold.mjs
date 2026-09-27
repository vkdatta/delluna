export const name="chart-pie-bold";
export const id="dl_035e6d6f544e47bfad81";
export const url=new URL("../icons/chart-pie-bold.svg?v=0bd31e965f075736044f97032cd61d971fbe73062490b426c7e44924c799161f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
