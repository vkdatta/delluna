export const name="widget_width";
export const id="dl_3ec951a578e44bd68dad";
export const url=new URL("../icons/widget_width.svg?v=759e4eddebbaa3ac956bf0ba420e92ca8929f0f402189e60990300bb9dd2aec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
