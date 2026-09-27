export const name="export";
export const id="dl_004b39763dfe436aadb0";
export const url=new URL("../icons/export.svg?v=e777089d11c3b052e8dc417559cb0dbb25735d785b6884f43f582956bf70c349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
