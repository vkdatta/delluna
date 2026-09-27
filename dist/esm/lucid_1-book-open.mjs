export const name="lucid_1-book-open";
export const id="dl_59e2e1d0180247abba0d";
export const url=new URL("../icons/lucid_1-book-open.svg?v=b58ad3ff8d435c823f43c37a6a192951991e5400f8041cc2d92694ec00534e78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
