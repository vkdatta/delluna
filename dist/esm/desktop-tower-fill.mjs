export const name="desktop-tower-fill";
export const id="dl_00d48adf83c24a4db732";
export const url=new URL("../icons/desktop-tower-fill.svg?v=a8c794a5370ed7050a69b4deabeb509612d8af4b2c80c57d4d329dd92ef45d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
