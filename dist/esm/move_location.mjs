export const name="move_location";
export const id="dl_9877d56e00a84462840a";
export const url=new URL("../icons/M/move_location.svg?v=1844fbf4682793929b74f0b588641a0818ed9dd192a43d2635a1cccb93bb588c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
