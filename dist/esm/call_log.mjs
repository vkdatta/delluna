export const name="call_log";
export const id="dl_effc47b246c95d1fc20a";
export const url=new URL("../icons/call_log.svg?v=f26fe817b03cad537d777b42a71ebe79444056c582f9e866dc07a3805c325e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
