export const name="tv_with_assistant-fill";
export const id="dl_9dc2e62e4e9a263ad116";
export const url=new URL("../icons/tv_with_assistant-fill.svg?v=9574ad636753de9c95bf9f66a385f475858e2ea5a88583e17894193628d1e778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
