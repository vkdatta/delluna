export const name="split";
export const id="dl_43ad1f214a3e40388a4c";
export const url=new URL("../icons/split.svg?v=4091c32101f3c548be8fa85cc7b1449c6e18860652a888fc70322e20a051f6af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
