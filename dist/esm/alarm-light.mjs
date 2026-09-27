export const name="alarm-light";
export const id="dl_13ffd4e46006481190e3";
export const url=new URL("../icons/alarm-light.svg?v=1e73744d8ebb75b2832fc610fc6675002c1c503affb579c0dae0a55aac83dae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
