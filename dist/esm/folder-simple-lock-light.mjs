export const name="folder-simple-lock-light";
export const id="dl_92677ee884e74cc98e4d";
export const url=new URL("../icons/folder-simple-lock-light.svg?v=9730c3a7fb3d2bfcbe84d3e279b6ddf30e995b7cc5734db5a66fceeca90bb55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
