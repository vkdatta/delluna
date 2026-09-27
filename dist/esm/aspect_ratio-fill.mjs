export const name="aspect_ratio-fill";
export const id="dl_c1e9daed3e699ee162cd";
export const url=new URL("../icons/aspect_ratio-fill.svg?v=fb000648c8802e39f0810c16306ccf7f3a3ac248454c17756216c9f065e4172d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
