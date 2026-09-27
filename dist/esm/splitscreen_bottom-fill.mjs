export const name="splitscreen_bottom-fill";
export const id="dl_acbfd8569c2d65fe7989";
export const url=new URL("../icons/splitscreen_bottom-fill.svg?v=67475b3bcc32d43cb28ea2ce0eea4e655ea087131bb962cc7c8c87b2b401851e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
