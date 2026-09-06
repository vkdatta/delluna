export const name="camera-rotate";
export const id="dl_13d10f095a58486682d4";
export const url=new URL("../icons/camera-rotate.svg?v=c7f308fd058ac9c62cf8164ea5d4ae6e5513199cf348d70d57a8e1a6f62c8ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
