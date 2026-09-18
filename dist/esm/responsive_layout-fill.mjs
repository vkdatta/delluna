export const name="responsive_layout-fill";
export const id="dl_ac30d02ca03f400d93f0";
export const url=new URL("../icons/R/responsive_layout-fill.svg?v=04c0b733fd56e265b7574e067c5e000f05f85c7c6a11c06963c282ac9672247a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
