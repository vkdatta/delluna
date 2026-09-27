export const name="print_connect-fill";
export const id="dl_420123855f90f07856f1";
export const url=new URL("../icons/print_connect-fill.svg?v=7375c893233dab85a86c54499199a8c226a5574da1cf5c4d232efe93642033ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
