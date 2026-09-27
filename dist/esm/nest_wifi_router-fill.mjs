export const name="nest_wifi_router-fill";
export const id="dl_b8090e526a6ab00e1d4a";
export const url=new URL("../icons/nest_wifi_router-fill.svg?v=5b7f5f0ffdc5a7b370fea6f3ea0f8834feae16ce190d2d820e02705fff03138b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
