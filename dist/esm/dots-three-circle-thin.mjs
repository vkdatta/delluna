export const name="dots-three-circle-thin";
export const id="dl_072855fd285b46c99fd1";
export const url=new URL("../icons/dots-three-circle-thin.svg?v=33fb827b400d1c9815db3d2a5548a2b0383c2e31b18b28af0145bd9541b25a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
