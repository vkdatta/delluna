export const name="gpp_maybe-fill";
export const id="dl_7c3f83ec1b9ac3f7dae6";
export const url=new URL("../icons/gpp_maybe-fill.svg?v=6c5d8a714947ae311f6e6b8b9d5cbb4a196677590420acd7e104430d9b130708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
