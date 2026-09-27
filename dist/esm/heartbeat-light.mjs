export const name="heartbeat-light";
export const id="dl_a45d6bf403004922843c";
export const url=new URL("../icons/heartbeat-light.svg?v=4867ce5567005a4522f1dd88554377ece581481b3ef2952e69c44d927c6e4800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
