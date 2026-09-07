export const name="battery-low-fill";
export const id="dl_ba598edad158445d8217";
export const url=new URL("../icons/battery-low-fill.svg?v=4072237e9d83d672e56f2218a2b123dab215b87b1663933128b0c047a5b5de11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
