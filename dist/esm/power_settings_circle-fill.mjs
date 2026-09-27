export const name="power_settings_circle-fill";
export const id="dl_490ac70e0c7581807e5c";
export const url=new URL("../icons/power_settings_circle-fill.svg?v=5eac74f6836c9b5c78a1c469fe7c4f624a36dd762468aacbd6bef8b4d930d9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
