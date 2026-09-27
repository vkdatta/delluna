export const name="calendar_add_on";
export const id="dl_d75456cc6a920deba244";
export const url=new URL("../icons/calendar_add_on.svg?v=f1a7c17edc37aaba5516b3d59bdcabd7304faf12301913833c3fb7015e45f352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
