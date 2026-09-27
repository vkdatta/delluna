export const name="ssid_chart";
export const id="dl_2778667f9096487ee583";
export const url=new URL("../icons/ssid_chart.svg?v=5552f71821e257846ffc48af98029c54ba11a7687a6f2480d3357e96156db004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
