export const name="dev-to-logo-thin";
export const id="dl_54fddc72b4df4b678fe4";
export const url=new URL("../icons/dev-to-logo-thin.svg?v=c03e289f12ec5f153814ab2b8cf1eea60e16bb4398c6c05209fa44c0001c01bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
