export const name="wave";
export const id="dl_88fb564deb76431cb113";
export const url=new URL("../icons/wave.svg?v=0439feba106fb258b078c5e5cc93d1a33a930e8339b748b14889741f0a52f7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
