export const name="call_quality";
export const id="dl_6ee695da26787a76eecb";
export const url=new URL("../icons/call_quality.svg?v=4cfbfc48fb999a493ef6c26a3513beba01983d30d82c207dfcf0c321b0f0baed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
