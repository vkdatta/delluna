export const name="blinds_2_closed-fill";
export const id="dl_89a4709b275d0ca2cade";
export const url=new URL("../icons/blinds_2_closed-fill.svg?v=0428b6c98aaa8997949985b28deba6ef6662ac59497861982024ed6167fab82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
