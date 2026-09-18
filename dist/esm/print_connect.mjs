export const name="print_connect";
export const id="dl_ed9cf25ab5a34e548d8e";
export const url=new URL("../icons/print_connect.svg?v=a3199e9af4e2fdf9a6194a1edd699dd2cad8af4077902d9e8d37f1bc40abed12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
