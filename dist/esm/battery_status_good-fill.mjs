export const name="battery_status_good-fill";
export const id="dl_a48d39f45fcf45e44808";
export const url=new URL("../icons/battery_status_good-fill.svg?v=cb73d34117a3d075fede94be088a46694f71731a53c425fd6ae7c55b9c901b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
