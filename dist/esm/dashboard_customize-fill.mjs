export const name="dashboard_customize-fill";
export const id="dl_9278bc644a26c79c1887";
export const url=new URL("../icons/dashboard_customize-fill.svg?v=c621e9cd76bb639535c418db48d4b4a875a1236bb00740a5fdfe4df14a6d4ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
