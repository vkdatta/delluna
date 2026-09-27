export const name="settings_accessibility-fill";
export const id="dl_aa91f0f1a7d7b1b88908";
export const url=new URL("../icons/settings_accessibility-fill.svg?v=526f833807dc8ddb548d1eac56f2577a9fa12464defa27e0e2d57d1b58293d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
