export const name="desktop_access_disabled";
export const id="dl_95f20b96eb1a487bb221";
export const url=new URL("../icons/desktop_access_disabled.svg?v=5ada3e2fb24a44ffde49ca45c5476e9b81ad05d26a14a4acdcc930750f538409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
