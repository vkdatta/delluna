export const name="caret-down-duotone";
export const id="dl_4dd9fd34f5bc4e258adb";
export const url=new URL("../icons/caret-down-duotone.svg?v=de19eb20164c35680bef88cfa493573e847c33d352ccb603e308c8749e530d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
