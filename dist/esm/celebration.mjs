export const name="celebration";
export const id="dl_f759f38c29bd437ef4df";
export const url=new URL("../icons/celebration.svg?v=1d48ae7dd755a11b596004f0444290fd7d1fd4c8350ee86de9428d79be89b2c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
