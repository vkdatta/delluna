export const name="suitcase-simple-bold";
export const id="dl_82533d33b2b65e2ac029";
export const url=new URL("../icons/suitcase-simple-bold.svg?v=5aa5a4ce56c7d330fea76654f9782f0dc2ab2f6fc6abf1b6e18bc3a55e0a75bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
