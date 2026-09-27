export const name="blanket-fill";
export const id="dl_bfb473173497bb981502";
export const url=new URL("../icons/blanket-fill.svg?v=738a4101886e8ebe65eb3bee216dd53c66557372bd0372574dc8ac8153786408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
