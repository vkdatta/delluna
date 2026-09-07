export const name="skip-forward-fill";
export const id="dl_d334265b714f4ec290d8";
export const url=new URL("../icons/S/skip-forward-fill.svg?v=2f13f5cbeab47627d30782e7942001e7f80f7da993df053d3be2b8c6cb737ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
