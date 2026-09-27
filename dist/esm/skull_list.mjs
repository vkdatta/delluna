export const name="skull_list";
export const id="dl_66d4fad733ef8d925e21";
export const url=new URL("../icons/skull_list.svg?v=c65e72df0a6fcb10befc7a7712ae8651d3ef6e702fdb6b12ff684708f79e69f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
