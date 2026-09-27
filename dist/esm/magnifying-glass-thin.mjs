export const name="magnifying-glass-thin";
export const id="dl_0de58e36749d49998022";
export const url=new URL("../icons/magnifying-glass-thin.svg?v=0643ed5895edde13948f916b593e3eae8c58f02bf681e6c7c270d9100cefa1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
