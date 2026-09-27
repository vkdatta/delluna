export const name="bell-simple-light";
export const id="dl_d33c2eae36ae43e8874a";
export const url=new URL("../icons/bell-simple-light.svg?v=9ddc46ebfb7fc8f64c3ce88e1fd78a060bb83779f43cc1eb80fd9a74aae850ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
