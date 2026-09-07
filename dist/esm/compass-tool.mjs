export const name="compass-tool";
export const id="dl_cb1218a44d3e46319dab";
export const url=new URL("../icons/compass-tool.svg?v=e8daa74c2ad5962c20baa89e278ecc6964e1798ccd1663a2bf12571fc34fc4a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
