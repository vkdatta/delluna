export const name="building-bold";
export const id="dl_053e5a5bc1c24e22855e";
export const url=new URL("../icons/building-bold.svg?v=a051e4b1dfedef7513466f6235cd68e3c70db0bfb5c3a6b82c659887e979cf38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
