export const name="scan-smiley-fill";
export const id="dl_47cdfcf418f24dd5bb5a";
export const url=new URL("../icons/S/scan-smiley-fill.svg?v=a22fd3cb5c2e7b15a0be70424b7b9844bc749af4669cf9a5677d4c0581863c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
