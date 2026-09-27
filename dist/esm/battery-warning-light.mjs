export const name="battery-warning-light";
export const id="dl_cf5c3642f8164cfe8da2";
export const url=new URL("../icons/battery-warning-light.svg?v=bd5c269b36310ae5a81809d51b5dc946800c764bd75b406162f6656674507b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
