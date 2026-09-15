export const name="file_json-fill";
export const id="dl_ec3459220e8a47438e7c";
export const url=new URL("../icons/F/file_json-fill.svg?v=056abffb2e3f0909cca68f2e24948badbc713181b06843bb4254b3c9f5fb2dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
