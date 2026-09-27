export const name="av1";
export const id="dl_07869361ce788b00a697";
export const url=new URL("../icons/av1.svg?v=e41d446f691b6c45d1e4b4f48ca9cf380c8982bed93220c44ac1f3f21e0bcb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
