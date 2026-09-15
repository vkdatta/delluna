export const name="brightness_auto";
export const id="dl_985f5e8103af492a8756";
export const url=new URL("../icons/B/brightness_auto.svg?v=27927aa8b56c37cd796f5f6bd4a344f6f27919c0325d3df2062fb8ee50f9cd6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
