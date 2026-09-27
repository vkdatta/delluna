export const name="history-fill";
export const id="dl_9318610e9002d428d046";
export const url=new URL("../icons/history-fill.svg?v=fc3f8634d6dfabfb77ce8d68c4767851b7dd23d3f2d205fa443d2aec89103157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
