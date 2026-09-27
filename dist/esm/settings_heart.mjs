export const name="settings_heart";
export const id="dl_988ccaf88b49f4527dce";
export const url=new URL("../icons/settings_heart.svg?v=f598ba4ab4b9b58cb5bc84083a39fe114832ed952ff213a6244a53e155b9a41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
