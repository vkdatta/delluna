export const name="view_week-fill";
export const id="dl_b0f01dd73e8b770e6c49";
export const url=new URL("../icons/view_week-fill.svg?v=b6f427234bafab69a1d36f09da4bc4c6f8a903cead47516b805f52c1abea71ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
