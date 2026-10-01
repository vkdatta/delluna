export const name="outlet";
export const id="dl_54be45285220f1e93dd5";
export const url=new URL("../icons/outlet.svg?v=49b23b4f2da6745ada6143a8d533d7e6147a85a8c1364410768d9a142d80f494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
