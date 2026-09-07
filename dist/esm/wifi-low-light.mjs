export const name="wifi-low-light";
export const id="dl_9f54b712a5ce419d8cd4";
export const url=new URL("../icons/W/wifi-low-light.svg?v=d0423fac7fa8c284b2f2652487f42d1c7da8659d618f7bb959aac710063afafc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
