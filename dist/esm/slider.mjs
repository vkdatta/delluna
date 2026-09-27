export const name="slider";
export const id="dl_28da3d9c733545128e90";
export const url=new URL("../icons/slider.svg?v=e7da7fc80a1df669e51e4e880070bface02a6b959582a94b10c15d61c4231980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
