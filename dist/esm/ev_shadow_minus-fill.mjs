export const name="ev_shadow_minus-fill";
export const id="dl_83ec18dd2ebcd6fe4f56";
export const url=new URL("../icons/ev_shadow_minus-fill.svg?v=57716c1ca4f06db324562f76603c94ebf1e33b519204155d209e2fe9e324dc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
