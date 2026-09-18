export const name="notification_add-fill";
export const id="dl_52be989e82024775ad2c";
export const url=new URL("../icons/notification_add-fill.svg?v=1bbc592df6311efaf3a0c7e6f2f03405c66cd1a83b4d102dfef25e64b0cd5cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
