export const name="user-circle-gear-thin";
export const id="dl_18c8459e63f342d3a43d";
export const url=new URL("../icons/U/user-circle-gear-thin.svg?v=11d0a7e73e63dbf25d52219aef99a37ac51901bc231b4ea6db4496e31491aa0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
