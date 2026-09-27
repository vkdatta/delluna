export const name="print_connect";
export const id="dl_b2e53cdc089b6cb0f3ed";
export const url=new URL("../icons/print_connect.svg?v=16d4acfd4a7bd24d2193d815c0db2d0d42f62df054bbad006e63599d76fbb846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
