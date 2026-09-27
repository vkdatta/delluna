export const name="troubleshoot-fill";
export const id="dl_14df30c9185453f569f3";
export const url=new URL("../icons/troubleshoot-fill.svg?v=a83680e5eeef69a6db0db5f0bd4664b3823b6bb5a771748347444e1d062ca119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
