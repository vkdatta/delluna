export const name="orange-slice-fill";
export const id="dl_73d9b0db48d94f55a77b";
export const url=new URL("../icons/orange-slice-fill.svg?v=5ffccf5ff11209ce67827fd512f2b8f6bd074f685182be15ff0de2e80242cab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
