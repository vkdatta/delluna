export const name="window_sensor";
export const id="dl_2509b2f8090e83518aea";
export const url=new URL("../icons/window_sensor.svg?v=ca3198e58ee6605c95dd15229963f5e4871d81898527765b082dcea0bc5d6b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
