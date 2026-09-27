export const name="crosshair";
export const id="dl_b89a97b539f54f86a9b3";
export const url=new URL("../icons/crosshair.svg?v=bbe08f74453d900252580723f3ada3f23d27957e6c6ab7e23eee645d0d9c83a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
