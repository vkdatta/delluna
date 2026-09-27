export const name="hand-fill";
export const id="dl_1e3036b877974103b5de";
export const url=new URL("../icons/hand-fill.svg?v=66f2ea6f64bc64e7be3d016597b3f938e14d2b7f35cc2f5e679fa88d7398a124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
