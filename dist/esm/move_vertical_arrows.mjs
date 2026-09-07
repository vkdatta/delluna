export const name="move_vertical_arrows";
export const id="dl_4a0adb197da049dca97a";
export const url=new URL("../icons/all_60_named_svgs/move_vertical_arrows.svg?v=68fc2795df1e0bdd46dc18642a133b86bce563ef81100095f9d645412bdcfcb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
