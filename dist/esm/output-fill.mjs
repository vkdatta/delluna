export const name="output-fill";
export const id="dl_e75584b954cfad0af91b";
export const url=new URL("../icons/output-fill.svg?v=e8f19dc95b973803122e0797644cbe3b2fe8454e394cbe92fa004ea03633a748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
