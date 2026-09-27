export const name="leaf-light";
export const id="dl_6253b923dec94695b289";
export const url=new URL("../icons/leaf-light.svg?v=8acbe829a11f64df7538ec8b312d031583d520473a2797578230e1a7606ccbd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
