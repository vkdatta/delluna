export const name="thumbnail_bar-fill";
export const id="dl_727f2b06d7bf499d8d79";
export const url=new URL("../icons/thumbnail_bar-fill.svg?v=ae5921b1d1545ee0128b8c72d896930f25c54c7197c9c98ca3cf13ea5de72978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
