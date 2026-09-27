export const name="share_off-fill";
export const id="dl_557e5799c0c7d417ebf6";
export const url=new URL("../icons/share_off-fill.svg?v=7c5f454af33895d18df029a358d7fe6bcd9a1d85febac33f3d657fa0e75a4202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
