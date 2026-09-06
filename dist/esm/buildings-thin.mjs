export const name="buildings-thin";
export const id="dl_0189584b5d2d4efabf13";
export const url=new URL("../icons/buildings-thin.svg?v=5eee1d9097b90631186025c628bcbc5526ed7c8bc36e0ba82b95e89a07640325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
