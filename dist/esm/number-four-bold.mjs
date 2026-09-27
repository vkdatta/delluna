export const name="number-four-bold";
export const id="dl_dc599179f7d443598f82";
export const url=new URL("../icons/number-four-bold.svg?v=1882f342309606daacc16757f1be0687e0fefe6faae3581e4989508e22777cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
