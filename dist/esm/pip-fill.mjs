export const name="pip-fill";
export const id="dl_3bee45936c8c9c71d35b";
export const url=new URL("../icons/pip-fill.svg?v=8d2f76a5926164f18b8bba295e4948ea9b21bf152d99868a7fe4f6389097eebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
