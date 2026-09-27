export const name="not-member-of-fill";
export const id="dl_2808bad170bf4a948f0e";
export const url=new URL("../icons/not-member-of-fill.svg?v=ade8464e3ef778db58472badc03810a10919adf9b8914f297230dd9c084cbc3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
