export const name="lucid_3-pointer-off";
export const id="dl_43c70b0349ea40cc825f";
export const url=new URL("../icons/lucid_3-pointer-off.svg?v=dbe1ad528f74346146bd0ffc31fc2ef09cb97318b92870643510ed1416e3ed39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
