export const name="print_disabled";
export const id="dl_b8aeeab4a43f41c5afba";
export const url=new URL("../icons/P/print_disabled.svg?v=e61d66b9f8bfc22a6a1c39fb4454633725caed61cb5cf56b509dd940eadea204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
