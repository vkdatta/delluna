export const name="device-mobile-speaker-bold";
export const id="dl_2b473192fd7245d68463";
export const url=new URL("../icons/device-mobile-speaker-bold.svg?v=e10b52d2eab48043f7be8b1fa7621ddadb1e2825ffc2fe3ec4b004be893ca292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
