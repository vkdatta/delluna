export const name="psychology-fill";
export const id="dl_a5e547b6f310dea1e592";
export const url=new URL("../icons/psychology-fill.svg?v=6b78483f8bce6c29a7090de4e7185a0f58112e4cface5fca672252a271f8b8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
