export const name="projector-screen-chart-light";
export const id="dl_1fbf2c5722f8493b8aa9";
export const url=new URL("../icons/projector-screen-chart-light.svg?v=a27e69899bdc156879dde76f7280c2f421b7060d915fae731e39c84122f7e7bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
