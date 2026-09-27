export const name="tabs";
export const id="dl_7aa8172b66c8c35f6a49";
export const url=new URL("../icons/tabs.svg?v=6fbba98747ae2a8ecfa3586451413dd4169c461715f33e8c5fe34b81bbd6e7b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
