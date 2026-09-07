export const name="user-circle-check";
export const id="dl_9d5e82cf958b48bfbff4";
export const url=new URL("../icons/U/user-circle-check.svg?v=79163772887422226dc94afd5d74a402d2eb120b5950fd889515eac829618f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
