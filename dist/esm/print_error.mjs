export const name="print_error";
export const id="dl_07d00ec4c3c346a6e01a";
export const url=new URL("../icons/print_error.svg?v=e6dfff426a22d92d7d2f7421a68b036b759eff17ad51efb98b4c28167b346530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
