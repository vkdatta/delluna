export const name="thumbs-up";
export const id="dl_ade39af6cfc8468683e5";
export const url=new URL("../icons/thumbs-up.svg?v=d4cf5da59195a7d7ec9329046ca4e0cb9a1d1cd787a0df0e3f75e0f55f8a31cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
