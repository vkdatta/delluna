export const name="nest_wifi_point";
export const id="dl_4b7decd37f0207597e53";
export const url=new URL("../icons/nest_wifi_point.svg?v=641380ca5335e171ec3a72157bf7537646e2efaa96b61eec45c9887657ddf7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
