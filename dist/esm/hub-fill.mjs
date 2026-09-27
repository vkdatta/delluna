export const name="hub-fill";
export const id="dl_96d7000bbf7c38cf4573";
export const url=new URL("../icons/hub-fill.svg?v=b3d8cb1384b3e37375e23115cd7a2d2547792313d8c84a51f435c4978b2d980a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
