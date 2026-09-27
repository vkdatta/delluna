export const name="export";
export const id="dl_004b39763dfe436aadb0";
export const url=new URL("../icons/export.svg?v=e68e6dcc4b86dd27e8d1e2d813b49d7a42d92659c091f29c6179c510210bd66f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
