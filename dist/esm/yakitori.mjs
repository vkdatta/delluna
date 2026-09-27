export const name="yakitori";
export const id="dl_96e2f800a83762139a60";
export const url=new URL("../icons/yakitori.svg?v=5591d353662819db2f9c9c175a284736355a750e2dcc168087236e4a4765c3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
