export const name="chevron_forward-fill";
export const id="dl_1cf196a55747467fb333";
export const url=new URL("../icons/C/chevron_forward-fill.svg?v=1fbc733491fd8d381e25f7adfb7ae0c40a4086708f171a73d11422d320217475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
