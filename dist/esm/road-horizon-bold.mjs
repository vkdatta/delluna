export const name="road-horizon-bold";
export const id="dl_c2beb3c79d114b0e99d6";
export const url=new URL("../icons/road-horizon-bold.svg?v=2c248135e4692851cd6b6a1c3915956e974f45220ac998e481cfdac9d378bf33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
