export const name="health_metrics-fill";
export const id="dl_770c724ec0c27dd122c0";
export const url=new URL("../icons/health_metrics-fill.svg?v=20af30f6d29de4dc006d0b3c18b748c65d17337734fbcc9b8acb1d009d1f4942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
