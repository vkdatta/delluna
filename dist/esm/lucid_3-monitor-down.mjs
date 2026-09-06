export const name="lucid_3-monitor-down";
export const id="dl_72fe3ce38d764242937e";
export const url=new URL("../icons/lucid_3-monitor-down.svg?v=542651206d24ef32547943f57590cacfa6139fbe8fdb65a8eade336ff7a1c7b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
