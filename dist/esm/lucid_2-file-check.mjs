export const name="lucid_2-file-check";
export const id="dl_deeee4be7e9b4df698f7";
export const url=new URL("../icons/lucid_2-file-check.svg?v=0f6ba5348e0245f4b325661af128135298569381296ff825a96bdef500bd0c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
