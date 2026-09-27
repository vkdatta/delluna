export const name="shield-slash-duotone";
export const id="dl_abf92031eeae478c72db";
export const url=new URL("../icons/shield-slash-duotone.svg?v=0edff0a7d67143d8b138aa3559b886bfe6af04ca3f5e02f36c0ddf48dbe27053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
