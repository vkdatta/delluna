export const name="shades_closed-fill";
export const id="dl_081ca9a2bd7fbff2e07c";
export const url=new URL("../icons/shades_closed-fill.svg?v=d87197974a85b29d89f1631c5af9eb768e528f8e7de653448b38eb4647a1e2d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
