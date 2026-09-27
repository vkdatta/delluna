export const name="folder_managed";
export const id="dl_a44e29d6173931c260ae";
export const url=new URL("../icons/folder_managed.svg?v=4f07b6cb003ec83185eda5e81af092348a43c9484f4ce5ca50adecfacc834a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
