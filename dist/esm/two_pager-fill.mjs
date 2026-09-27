export const name="two_pager-fill";
export const id="dl_a85e2305b9c3a0aa508d";
export const url=new URL("../icons/two_pager-fill.svg?v=db64dbf54f19ff0dc3c4ed4b5103ef10ec7834c398ca6ed526699654fab7270d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
