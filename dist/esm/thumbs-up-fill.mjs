export const name="thumbs-up-fill";
export const id="dl_f74ede50b9d87f50fa83";
export const url=new URL("../icons/thumbs-up-fill.svg?v=bfe5e5d17c8389bc3891d08b025eb3cd366f4a5f5c6477cf4ebe2d9f38736f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
