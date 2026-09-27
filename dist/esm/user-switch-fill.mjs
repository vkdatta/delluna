export const name="user-switch-fill";
export const id="dl_9e0b367d56bb0df53022";
export const url=new URL("../icons/user-switch-fill.svg?v=64095d07f525ae943a2197e31377356a20b0d606e4912e80ee64edfc175928d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
