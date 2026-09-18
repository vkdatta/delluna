export const name="subheader-fill";
export const id="dl_e5f6b62e4f564703bb8d";
export const url=new URL("../icons/subheader-fill.svg?v=b63bb42740938c6d0dcc5a835c88a4a0d3b97ec683fcfea93bc3879b984387aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
