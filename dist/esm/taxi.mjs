export const name="taxi";
export const id="dl_fd7911684c934f8fb7ac";
export const url=new URL("../icons/T/taxi.svg?v=fe6acfae2c4b0c4a814f5a0c57ab0299eb9759ae3a07dae37200fdb3f7c05c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
