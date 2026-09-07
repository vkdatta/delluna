export const name="tornado-fill";
export const id="dl_2d9ef6e27d1a461b8bf8";
export const url=new URL("../icons/T/tornado-fill.svg?v=d28bf387f782c08ede19412cc780527de814c460b48bbc8ecea413271b864d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
