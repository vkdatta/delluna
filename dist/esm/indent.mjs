export const name="indent";
export const id="dl_8f0b87c953f04017ba69";
export const url=new URL("../icons/all_60_named_svgs/indent.svg?v=e2847ef83204a8e2ac675ae6a72de670aca2a29d79c87bb486cd1033feae75fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
