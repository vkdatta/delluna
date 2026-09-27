export const name="split-vertical-fill";
export const id="dl_6cc6a4600b8a02254196";
export const url=new URL("../icons/split-vertical-fill.svg?v=12c987ac8eb6c217223f71aa7f845f66cd7a49a359d54b2e4e6ccdf51ea58317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
