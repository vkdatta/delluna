export const name="caret-circle-double-up";
export const id="dl_8357173efe4f42b18d2d";
export const url=new URL("../icons/caret-circle-double-up.svg?v=7e36a0343dda4f5f86c7c079b731f7092554e128b76d0150cf678b1d40fd7659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
