export const name="monitor_weight";
export const id="dl_4689bd7e73b0bf4d6f95";
export const url=new URL("../icons/monitor_weight.svg?v=9bec56101d7a163e459ac8b76f76893ba3fe7a1801b89863203bda52a80fd3d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
