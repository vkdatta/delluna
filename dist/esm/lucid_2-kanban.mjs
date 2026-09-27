export const name="lucid_2-kanban";
export const id="dl_4ec44e17861f4b5dbf89";
export const url=new URL("../icons/lucid_2-kanban.svg?v=01e99d2fcc5f64b5a848aaf2fcd99b2380c9c6dd4b8fc13a84a2dd9ba3a85d42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
