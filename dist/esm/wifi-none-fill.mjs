export const name="wifi-none-fill";
export const id="dl_6ec5c67eb5824e76a51e";
export const url=new URL("../icons/W/wifi-none-fill.svg?v=0e5c3988fba423fbac136b4faab4aa62bee52e1753b0fcbd3003048bdddb5374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
