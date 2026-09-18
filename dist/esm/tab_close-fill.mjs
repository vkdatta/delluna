export const name="tab_close-fill";
export const id="dl_ea1522240f764dc5a111";
export const url=new URL("../icons/T/tab_close-fill.svg?v=f01c723cd576456e9bee93a39fc67619e27c02ac23dab5fe43a580c0870e2bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
