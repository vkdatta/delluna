export const name="high_res-fill";
export const id="dl_ba920cc6e2894282a667";
export const url=new URL("../icons/high_res-fill.svg?v=de5c2cc3f3395b11e73c5a85c1055c9ef9231db0b707a323444305a64d245250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
