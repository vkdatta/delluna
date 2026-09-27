export const name="auto_awesome";
export const id="dl_7cbe64e0fe7ee1e8b300";
export const url=new URL("../icons/auto_awesome.svg?v=7e7f1aa21489205d4fb10b2f5f3e18c95194f68e6c7ceaaa238cd3425cf2aa5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
