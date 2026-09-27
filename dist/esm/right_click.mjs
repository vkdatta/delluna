export const name="right_click";
export const id="dl_22f2cbfa395e6386fafc";
export const url=new URL("../icons/right_click.svg?v=fcf33b6cbea93165567ff54fcbdf90a3658e31c86a96e35411be073b3cfb3302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
