export const name="egg_alt-fill";
export const id="dl_1f23f972df6e4fffae66";
export const url=new URL("../icons/egg_alt-fill.svg?v=182dee1852ed098256d35a922283675e2e6c75dc7c10385de595bdb6641837f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
