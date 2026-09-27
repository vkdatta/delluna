export const name="split-horizontal-light";
export const id="dl_488a881eb0e0daf996a5";
export const url=new URL("../icons/split-horizontal-light.svg?v=30f23f6cc473cee4392fefa8d729ddae58fd4b57c31ac6d13de63b6e14d1c758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
