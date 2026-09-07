export const name="sliders-bold";
export const id="dl_2c5b8dfca347413991a3";
export const url=new URL("../icons/S/sliders-bold.svg?v=007cbacb2c8cdc44951edc8af5ae77b535933c6372ed4c52dbfd5171a90a3910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
