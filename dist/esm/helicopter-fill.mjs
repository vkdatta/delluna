export const name="helicopter-fill";
export const id="dl_eae60e787d512d0229cb";
export const url=new URL("../icons/helicopter-fill.svg?v=9d22346cbf89500d9872ffc299cfc3d574f4471b1905867b987e108419f3b9b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
