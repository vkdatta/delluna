export const name="horizontal_distribute";
export const id="dl_9788270f8312039e2971";
export const url=new URL("../icons/horizontal_distribute.svg?v=55ab61487f26de96c90ce83dff0022a2f06cc1bcc4baeb69b92a44f011743d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
