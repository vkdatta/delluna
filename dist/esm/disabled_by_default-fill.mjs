export const name="disabled_by_default-fill";
export const id="dl_2d01832aa84946628226";
export const url=new URL("../icons/D/disabled_by_default-fill.svg?v=3de396b01ead1c2e429b615e0cb89b54a3deb19c48480dd9f9cdab988232ce2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
