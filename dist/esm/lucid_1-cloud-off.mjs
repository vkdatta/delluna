export const name="lucid_1-cloud-off";
export const id="dl_b30b41120fe848129d36";
export const url=new URL("../icons/lucid_1-cloud-off.svg?v=bc37aeff5ce47be2c2e94bda69ba56ba27b5567583f3ab3780cc081dd1e6cdb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
