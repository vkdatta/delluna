export const name="local_see-fill";
export const id="dl_ed2e3002709c55aa55e4";
export const url=new URL("../icons/local_see-fill.svg?v=c8e47e9fa4ce441138f2f7dcb137ae7545e2a62d7bb09569e518db086acaebc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
