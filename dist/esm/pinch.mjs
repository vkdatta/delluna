export const name="pinch";
export const id="dl_6c799e40bedbcdee4a92";
export const url=new URL("../icons/pinch.svg?v=13e30d42a604d895cfbd518eb4d58f9cdabbed8c4a44c44759da5ad28b732dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
