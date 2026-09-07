export const name="baseball-helmet-fill";
export const id="dl_f36c3ececa6b4ecb9e12";
export const url=new URL("../icons/baseball-helmet-fill.svg?v=1023613559a1cd2d4ae1d1cdbca66e0bfbdbd48f90badec8b6a451ba52b50350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
