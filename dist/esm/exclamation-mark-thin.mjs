export const name="exclamation-mark-thin";
export const id="dl_0637c17bcbb94a9a8820";
export const url=new URL("../icons/exclamation-mark-thin.svg?v=add3d3c3cd30c92d63155ab85ff61b3037b09c25df9c61dff4b5c647c07c9393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
