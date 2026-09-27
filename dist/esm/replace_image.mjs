export const name="replace_image";
export const id="dl_88fad4d43792c710474a";
export const url=new URL("../icons/replace_image.svg?v=9c27b13efbd7281dde46b429daf90edefd946a95bbdfc01004a6c1e34335c834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
