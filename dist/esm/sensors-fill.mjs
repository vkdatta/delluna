export const name="sensors-fill";
export const id="dl_8fbd326aa685960ac5ed";
export const url=new URL("../icons/sensors-fill.svg?v=68cbf7b0871dca30331f219d54dac5c81e97edc76b127a81e96d3b1f99c79daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
