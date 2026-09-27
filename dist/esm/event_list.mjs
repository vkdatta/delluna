export const name="event_list";
export const id="dl_0c58ab826cdbc898e37b";
export const url=new URL("../icons/event_list.svg?v=438a3d662abf0ce0ea59e7196b9fce2990236023efd915c46392173376d11fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
