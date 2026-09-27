export const name="reset_shadow-fill";
export const id="dl_b18bea91967152e3d469";
export const url=new URL("../icons/reset_shadow-fill.svg?v=dc917e43a633f4d57fde4f41c1238851e55ca50750b7cee7832bc137c296b358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
