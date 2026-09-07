export const name="shield-check-duotone";
export const id="dl_683f5448ae2943bfb027";
export const url=new URL("../icons/S/shield-check-duotone.svg?v=e42c34a900022e60b41136a5744989af1cfb977247079afbfaf5a8440b86fd91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
