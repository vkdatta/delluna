export const name="tv_next-fill";
export const id="dl_701587dcc1365c52f825";
export const url=new URL("../icons/tv_next-fill.svg?v=3d0b087e0d058cc3d12df5d91c8fea830a7a8417a76d87e53e626676cc4f5c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
