export const name="trophy-fill";
export const id="dl_11cd1e1cce0631bd222e";
export const url=new URL("../icons/trophy-fill.svg?v=c1df8f72ea4cbf70510d40b2fabc2a049bf66a25dfaeb04707ca899e64f8c03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
