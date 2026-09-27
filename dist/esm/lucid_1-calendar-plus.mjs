export const name="lucid_1-calendar-plus";
export const id="dl_d9c632799a074fdd8851";
export const url=new URL("../icons/lucid_1-calendar-plus.svg?v=dad2670f3d612459a4573770cc716199dbf1b4ceeacbd377a06e72031441a25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
