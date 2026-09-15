export const name="check_box";
export const id="dl_d2fc0a4415ac43139b9b";
export const url=new URL("../icons/C/check_box.svg?v=fc99af59338e80456a250adffa66c92ec18e39c1afcfc6eee3330d3b9b6a4280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
