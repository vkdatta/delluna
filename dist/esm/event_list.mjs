export const name="event_list";
export const id="dl_be3c9dd107da4796bac6";
export const url=new URL("../icons/event_list.svg?v=6e4000a998b6721384924355bffb247c2b0dc1071b5c2904ca7fa4802bfa3657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
