export const name="bulldozer";
export const id="dl_9e0dcf2238de48a2a992";
export const url=new URL("../icons/bulldozer.svg?v=a23a4a7f6c04a3fafe0f95cbea204a4abba3def3ea31f0d18b93b10ea6eb6556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
