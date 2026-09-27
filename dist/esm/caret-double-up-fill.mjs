export const name="caret-double-up-fill";
export const id="dl_fccf6740c86f45c29ec1";
export const url=new URL("../icons/caret-double-up-fill.svg?v=efd457f307ac38773fabff69b3fd8ff42688837b3f5cf2f0d251344660c7e7ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
