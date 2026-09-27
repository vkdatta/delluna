export const name="warning_off-fill";
export const id="dl_b9555dd3d725dcbf05c7";
export const url=new URL("../icons/warning_off-fill.svg?v=cdd9050a46d1e1b08237bbd05641eb791ee560783174e352f3c3bde7fd5e6113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
