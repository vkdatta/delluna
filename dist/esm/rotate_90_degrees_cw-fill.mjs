export const name="rotate_90_degrees_cw-fill";
export const id="dl_f8d7244821015fd95e3f";
export const url=new URL("../icons/rotate_90_degrees_cw-fill.svg?v=a6397298fb778c01dff3141b1e2faff536151cedc79d6d1ae19f87e2894616b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
