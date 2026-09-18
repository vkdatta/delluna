export const name="media_output";
export const id="dl_80077e3844bb4d059cde";
export const url=new URL("../icons/media_output.svg?v=dc52c619f0a732d1401a8b11e95f640b00ae665c2df57d71fdde241380074e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
