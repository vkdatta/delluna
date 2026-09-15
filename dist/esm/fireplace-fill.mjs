export const name="fireplace-fill";
export const id="dl_c9681f8aec854493b7e4";
export const url=new URL("../icons/F/fireplace-fill.svg?v=3ccbb6f314bd79679c99f45512a000f5bf9d1eb34dfdcf3bc6ade0ea613f6bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
