export const name="format_image_left-fill";
export const id="dl_171ada03beb9069c93a4";
export const url=new URL("../icons/format_image_left-fill.svg?v=f4b915c89a677d6f109df1552f25012ded1794519f56e8273873f7348e913904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
