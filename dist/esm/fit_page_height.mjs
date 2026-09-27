export const name="fit_page_height";
export const id="dl_62940dee7d0aaca6d9d6";
export const url=new URL("../icons/fit_page_height.svg?v=157de15de513a325daaf3b05fde920d936e28b950a770601add2c3435fe88266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
