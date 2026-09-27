export const name="arrows_up_down_circle-fill";
export const id="dl_622dc4d9233eec1544d2";
export const url=new URL("../icons/arrows_up_down_circle-fill.svg?v=cb3b92d1762231fe35465cc06f8ba973aa0e297c96877267389005b821ebe33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
