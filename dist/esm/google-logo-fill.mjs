export const name="google-logo-fill";
export const id="dl_26275e1c501e4a21994a";
export const url=new URL("../icons/google-logo-fill.svg?v=5182017512d180447125440e124c003b1469396433811b61c7c7bc8676294568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
