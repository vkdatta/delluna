export const name="wifi-high-thin";
export const id="dl_dc36ca1deccdf388dade";
export const url=new URL("../icons/wifi-high-thin.svg?v=3cc0200386982d2db611eea571b4b24ee4e301a8091cb384a518e2d07261a382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
