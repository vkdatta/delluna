export const name="view_week-fill";
export const id="dl_0077b28d50f34ee39e3a";
export const url=new URL("../icons/view_week-fill.svg?v=b6f427234bafab69a1d36f09da4bc4c6f8a903cead47516b805f52c1abea71ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
