export const name="width_wide-fill";
export const id="dl_eae879af524f6f5eba08";
export const url=new URL("../icons/width_wide-fill.svg?v=93159649bdf05ff17b1d5fb0acb5696481c2b62c1b165074d4c0be76e9a153d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
