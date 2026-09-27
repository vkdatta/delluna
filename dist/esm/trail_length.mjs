export const name="trail_length";
export const id="dl_45c4a05224e359970aff";
export const url=new URL("../icons/trail_length.svg?v=2bf7ba420e1f332e392791b03cf6c5aca20a119972938ad9a75aa0a95482cfbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
