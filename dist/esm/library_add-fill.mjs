export const name="library_add-fill";
export const id="dl_ccc9d438c2755650c479";
export const url=new URL("../icons/library_add-fill.svg?v=4840d16dca42eb6bcfa80d8f423bbcbf9800c229d3b2e10c7325d9ecbf5808ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
