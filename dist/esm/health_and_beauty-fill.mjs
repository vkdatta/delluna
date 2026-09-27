export const name="health_and_beauty-fill";
export const id="dl_4ed26e88ddefe75a83dd";
export const url=new URL("../icons/health_and_beauty-fill.svg?v=1b5166004fe1b248b631c4a912814cb606220f69c27858fd0b165817b004391e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
