export const name="subtract-square-thin";
export const id="dl_c99115d52988e4b131ae";
export const url=new URL("../icons/subtract-square-thin.svg?v=76db2db642e61dbeaf2bef4157afd9a77ec3ab58a77eaa55d85277d1f4eeed3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
