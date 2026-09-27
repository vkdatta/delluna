export const name="wifi_off";
export const id="dl_ba2c31dc0356f2979c84";
export const url=new URL("../icons/wifi_off.svg?v=887d7feb84648fbf54a447dc0eefdc6852b924823c72a2bf9d9f0226af9fac2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
