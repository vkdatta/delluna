export const name="rows-plus-bottom";
export const id="dl_b811c5027ee04713901c";
export const url=new URL("../icons/rows-plus-bottom.svg?v=1a869724591aa9c8a53f896da6b9b3361a724a5e1247ac89be362e357ea61a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
