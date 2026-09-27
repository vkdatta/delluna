export const name="list-numbers";
export const id="dl_0707a65e88444558a9cb";
export const url=new URL("../icons/list-numbers.svg?v=5d0c7e97257d1c78191d95b4bbd00d54d8768427d66ec9ea3f183ecf051b7c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
