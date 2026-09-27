export const name="airplay";
export const id="dl_59ce340af6754e1fb3ab";
export const url=new URL("../icons/airplay.svg?v=739d368d55743a5769bbb0f84660235bfdc5916996b2011478c89f2617849976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
