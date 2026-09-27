export const name="share_eta-fill";
export const id="dl_3b7066659e19c089bc3c";
export const url=new URL("../icons/share_eta-fill.svg?v=494b190f478e9c55ec647c256f14587bfa96d7d909cdab60524c379cba1ad48f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
