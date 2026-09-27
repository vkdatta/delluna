export const name="perspective-fill";
export const id="dl_03dba3c6cb8849ae8034";
export const url=new URL("../icons/perspective-fill.svg?v=e5c6cdd2428b52d71fc36727bcd308fe14860d38332f27941e3913d803d89d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
