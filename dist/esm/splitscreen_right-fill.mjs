export const name="splitscreen_right-fill";
export const id="dl_b07806ae32e742ba8ed6";
export const url=new URL("../icons/splitscreen_right-fill.svg?v=e5358b7aa840303a229af99147acff9b88f7e804b1eac33f851e395fa492d51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
