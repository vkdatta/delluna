export const name="lucid_1-calendar-plus";
export const id="dl_d9c632799a074fdd8851";
export const url=new URL("../icons/lucid_1-calendar-plus.svg?v=28affa59b380a3eb61f4c5b00d5f4c6c952b1245ec6e219faa519318d84e14f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
