export const name="web-fill";
export const id="dl_6fb76fd4552abbc2c633";
export const url=new URL("../icons/web-fill.svg?v=394563689d377c08616263723ab95dc893fcba30db66a098300299ec4686443c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
