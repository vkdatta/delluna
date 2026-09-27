export const name="hourglass_bottom-fill";
export const id="dl_1c6d754d169281ac91e0";
export const url=new URL("../icons/hourglass_bottom-fill.svg?v=0eda030d7c569148ce45c458ab5445714b18c8f24834296cb0c08baad0dd07e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
