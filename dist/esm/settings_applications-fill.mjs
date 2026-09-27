export const name="settings_applications-fill";
export const id="dl_d404760b6a8f1ccf03ce";
export const url=new URL("../icons/settings_applications-fill.svg?v=085f085ab75e90c007280ca73f53c1541f0a8c2c4c8a45d799c11ea6b4d20797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
