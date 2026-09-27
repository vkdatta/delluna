export const name="stop-thin";
export const id="dl_38a1c9ed3172e012333c";
export const url=new URL("../icons/stop-thin.svg?v=657921c096fb309f03d13b89168bce9d8891403666ae09f832748c48aab0ad96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
