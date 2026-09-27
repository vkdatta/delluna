export const name="wechat-logo-thin";
export const id="dl_defc8ff8a38a1c2db9c7";
export const url=new URL("../icons/wechat-logo-thin.svg?v=aa578916823dd8fbe3232d7258d88273b6839ef7190c3ce1404461cc9b4951ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
