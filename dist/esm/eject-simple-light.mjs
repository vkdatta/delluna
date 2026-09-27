export const name="eject-simple-light";
export const id="dl_b4854bd94cb8448c8e1c";
export const url=new URL("../icons/eject-simple-light.svg?v=0722e891428bc1df4293f4e7c95a0bfdae734f576d6c9693d86b4bf770024077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
