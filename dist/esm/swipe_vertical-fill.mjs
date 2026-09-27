export const name="swipe_vertical-fill";
export const id="dl_0f27f0c1a7d444a0d053";
export const url=new URL("../icons/swipe_vertical-fill.svg?v=3149c20a2c60f384363e7daa332f1b328addbb1514ae169fc1be8163978e1e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
