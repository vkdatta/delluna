export const name="notification-light";
export const id="dl_bddc9cf34c1f4e85bd92";
export const url=new URL("../icons/notification-light.svg?v=18a85ae1179a229089f03b1cac68c7a2f975a813118c2f8a0201f25c00780801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
