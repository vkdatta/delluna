export const name="device-rotate-bold";
export const id="dl_de54e406bd184541b1a6";
export const url=new URL("../icons/device-rotate-bold.svg?v=6f5557802a476341be48df57e65802ce3b952f70f2c3454c43304c8ddc3743ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
