export const name="mouse-middle-click";
export const id="dl_68d26f864f1a4f6ab54a";
export const url=new URL("../icons/mouse-middle-click.svg?v=6387848d7f8c7e3906f2cd802a04e1591a3f01783c8f33313df34e761ff644a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
