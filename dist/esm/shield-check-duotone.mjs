export const name="shield-check-duotone";
export const id="dl_f666a13bde45ab375ebe";
export const url=new URL("../icons/shield-check-duotone.svg?v=e42c34a900022e60b41136a5744989af1cfb977247079afbfaf5a8440b86fd91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
