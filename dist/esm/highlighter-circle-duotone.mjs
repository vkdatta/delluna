export const name="highlighter-circle-duotone";
export const id="dl_f17af43e403440e98283";
export const url=new URL("../icons/highlighter-circle-duotone.svg?v=3750ce585938231e5c811965595cac3442532b5585db20c89542e915cfb79afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
