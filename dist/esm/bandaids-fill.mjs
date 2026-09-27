export const name="bandaids-fill";
export const id="dl_17c6674b8a3e43c1a5bd";
export const url=new URL("../icons/bandaids-fill.svg?v=18df4c61e3797bb6d452c2439ae00e4222c55432629ea47ed95edfb23e82cf3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
